var mongoose = require('mongoose');
var Loc = mongoose.model('User');



var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

var doAddTipo = function(req, res, user) {
	if (!user) {
		sendJsonResponse(res, 404, {
			"message": "userid not found"
		});
	} else {
		user.tipos.push({
			nombreTipo: req.body.nombreTipo,
			descripcion: req.body.descripcion
		});
		user.save(function(err, location) {
			var thisTipo;
			if (err) {
				sendJsonResponse(res, 400, err);
			} else {
				thisTipo = user.tipos[user.tipos.length - 1];
				sendJsonResponse(res, 201, thisTipo);
			}
		});

	}
}


module.exports.reviewsCreate = function (req, res) {
	var locationid = req.params.locationid;
	if (locationid) {
		Loc
		.findById(locationid)
		.select('tipos')
		.exec(
			function(err, user) {
				if (err) {
					sendJsonResponse(res, 400, err);
				} else {
					doAddTipo(req, res, user);
				}
			}
		);
	} else {
		sendJsonResponse(res, 404, {
			"message": "Not found, locationid required"
		});
	}
};
module.exports.reviewsReadOne = function (req, res) {
	if (req.params && req.params.locationid && req.params.reviewid) {
		Loc
		.findById(req.params.locationid)
		//.select('nombre tipos')

		.exec(
			function(err, user) {
				var response, tipo;
				if (!user) {
					sendJsonResponse(res, 404, {
						"message": "userasdsad not found"
					});
					return;
				} else if (err) {
					sendJsonResponse(res, 404, err);
					return;
				}
				if (user.tipos && user.tipos.length > 0) {
					tipo = user.tipos.id(req.params.reviewid);
					if (!tipo) {
						sendJsonResponse(res, 404, {
							"message": "tipo not found"
						});
					} else {
						response = {
							user : {
								name : user.name,
								id : req.params.locationid
							},
							tipo : tipo
						};
						sendJsonResponse(res, 200, response);
					}
				} else {
					sendJsonResponse(res, 404, {
						"message": "No tipos found"
					});
				}
			}

			
		);
	} else {
		sendJsonResponse(res, 404, {
			"message": "No user ni tipo in request"
		});
	}
};


module.exports.reviewsUpdateOne = function(req, res) {
	if (!req.params.locationid || !req.params.reviewid) {
		sendJsonResponse(res, 404, {
			"message": "Not found, locationid and reviewid are both required"
		});
		return;
	}
	Loc
		.findById(req.params.locationid)
		.select('tipos')
		.exec(
			function(err, user) {
				var thisTipo;
				if (!user) {
					sendJsonResponse(res, 404, {
						"message": "locationid not found"
					});
					return;
				} else if (err) {
					sendJsonResponse(res, 400, err);
					return;
				}
				if (user.tipos && user.tipos.length > 0) {
					thisTipo = user.tipos.id(req.params.reviewid);
					if (!thisTipo) {
						sendJsonResponse(res, 404, {
							"message": "reviewid not found"
						});
					} else {
						thisTipo.nombreTipo = req.body.nombreTipo;
						thisTipo.descripcion = req.body.descripcion;
						user.save(function(err, user) {
							if (err) {
								sendJsonResponse(res, 404, err);
							} else {
								sendJsonResponse(res, 200, thisTipo);
							}
						});
					}
				} else {
					sendJsonResponse(res, 404, {
						"message": "No review to update"
					});
				}
			}
		);

};