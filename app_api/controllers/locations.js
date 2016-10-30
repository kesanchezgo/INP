var mongoose = require('mongoose');
var Loc = mongoose.model('User');


var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};
module.exports.locationsCreate = function (req, res) {
	Loc.create({
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		mail: req.body.mail,
		contrasenia: req.body.contrasenia,
		genero: req.body.genero,
		telefono: req.body.telefono,
		nacDia: req.body.nacDia,
		nacMes: req.body.nacMes,
		nacAnio: req.body.nacAnio

	}, function(err, user) {
		if (err) {
			sendJsonResponse(res, 400, err);
		} else{
			sendJsonResponse(res, 201, user);
		}
	});

};
module.exports.locationsListByDistance = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsReadOne = function (req, res) {
	if (req.params && req.params.locationid) {
		Loc
		.findById(req.params.locationid)
		.exec(function(err, user) {
			if (!user) {
				sendJsonResponse(res, 404, {
					"message": "user not found"
				});
				return;
			} else if (err) {
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, user);
		});
	} else {
		sendJsonResponse(res, 404, {
			"message": "No user in request"
		});
	}
};
module.exports.locationsUpdateOne = function (req, res) {
	
	if (!req.params.locationid) {
		sendJsonResponse(res, 404, {
		"message": "Not found, locationid is required"
		});
		return;
	}
	Loc
		.findById(req.params.locationid)
		.select('-tipos')
		.exec(
			function(err, user) {
				if (!user) {
					sendJsonResponse(res, 404, {
						"message": "userid not found"
					});
					return;
				} else if (err) {
					sendJsonResponse(res, 400, err);
					return;
				}
				user.nombre = req.body.nombre;
				user.apellido = req.bcontraseniaody.apellido;
				user.mail = req.body.mail;
				user.contrasenia = req.body.contrasenia;
				user.genero = req.body.genero;
				user.telefono = req.body.telefono;
				user.nacDia = req.body.nacDia;
				user.nacMes = req.body.nacMes;
				user.nacAnio = req.body.nacAnio;

				user.save(function(err, user) {
					if (err) {
						sendJsonResponse(res, 404, err);
					} else {
						sendJsonResponse(res, 200, user);
					}
				});
			}		
		);				
};
module.exports.locationsDeleteOne = function (req, res) {
	var locationid = req.params.locationid;
	if (locationid) {
		Loc
			.findByIdAndRemove(locationid)
			.exec(
				function(err, location) {
					if (err) {
						sendJsonResponse(res, 404, err);
						return;
					}
					sendJsonResponse(res, 204, null);
				}
			);
	} else {
		sendJsonResponse(res, 404, {
			"message": "No locationid"
		});
	}
};