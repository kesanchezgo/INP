var mongoose = require('mongoose');
var User = mongoose.model('user');


var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.userCreate = function(req, res){

	User.create({
		name: req.body.name,
		lastname: req.body.lastname,
		email : req.body.email,
		password: req.body.password,
		dni: req.body.dni,
		phone: req.body.phone,
		sex : req.body.sex
	}, function(err, newUser){
		if(err){
			sendJsonResponse(res, 400, err);
		} else {
			sendJsonResponse(res, 201, newUser);
		}
	})
}
