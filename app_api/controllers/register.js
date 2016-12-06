var mongoose = require('mongoose');
var User = mongoose.model('user');


var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

//Crea un usuario
module.exports.userCreate = function(req, res){
   
   

	User.create({
		name: req.body.name,
        lastname: req.body.lastname,
        email : req.body.email,
        password: req.body.password,
        dni: req.body.dni,
        phone: req.body.phone,
        sex : req.body.sex,
        type : req.body.type,
        nacDia : req.body.dia,
        nacMes : req.body.mes,
        nacAnio :req.body.anio

	}, function(err, usuarios){
		if(err){
			console.log("ER!");
            sendJsonResponse(res, 400, err);
			//res.redirect('/');
		} else {
			console.log("Good!");
			sendJsonResponse(res, 201, usuarios);
			//res.redirect('/');
		}
	});
};

//lista de Usurios
module.exports.listUser = function(req, res){	
	console.log("EN Api");
	User
	  .find()
	  .exec(function(err, usuarios){
	  	if(!usuarios){
	  		console.log("No hay usuarios!")
	  		return;
	  	} else if(err){
	  		console.log("ERROR!")
	  		return;
	  	}
	  	//console.log("Numero  de usuarios"+usuarios.length);
	  	sendJsonResponse(res, 200, usuarios);
	  });
};

//Obtenemos un Usuario
module.exports.getOneUser = function(req, res){
	console.log("EN Api gdgdfgdfg"+usuario.name);
	User
	  .findById(req.params.userid)
	  .exec(
	  	function(err,usuario){
	  		if(!err){
	  			if(usuario){
	  				console.log("EN Api"+usuario.name);
	  				sendJsonResponse(res, 200, usuario);
	  			}
	  			else sendJsonResponse(res, 400, usuario);

	  		} else{
	  			sendJsonResponse(res, 404, {message:'Usuario no encontrado!'});
	  		}

	  	});
};


module.exports.readOneUser = function(req, res){
	console.log("EN Api gdfgdfg");
	User
	  .findById(req.params.userid)
	  .exec(
	  	function(err,usuario){
	  		if(!err){
	  			if(usuario){
	  				console.log("EN Api"+usuario.name);
	  				sendJsonResponse(res, 200, usuario);
	  			}
	  			else sendJsonResponse(res, 400, usuario);

	  		} else{
	  			sendJsonResponse(res, 404, {message:'Usuario no encontrado!'});
	  		}

	  	});
};

//eliminamos un Usuario

module.exports.deleteOneUser = function(req, res){
	var userid = req.params.userid;
	if(userid){
		User
		  .findByIdAndRemove(userid)
		  .exec(function(err, usuario){
		  	if(err){
		  		sendJsonResponse(res, 404,err);
		  		return;
		  	}
		  	console.log("ELIMINADO DE API");
		  	sendJsonResponse(res, 204, null);
		  });
	} else {
		sendJsonResponse(res, 404, {message: "No User iD" });
		
	}
};

//actualizando usuario

module.exports.updateOneUser = function(req, res){
	
	var idUser = req.params.userid;
	if(idUser){
		User
		  .findById(idUser)
		  .exec(function(err, usuario){
		  	if(!usuario){
		  		console.log("no existte user");
		  		sendJsonResponse(res, 404,{	message: "User not found"} );
		  		return;
		  	} else if(err){
		  		console.log("Error al actualizando");
		  		sendJsonResponse(res, 400,err);
		  		return;
		  	}
           
		  	usuario.name = req.body.name;
		  	usuario.lastname = req.body.lastname;
		  	usuario.email = req.body.email;
		  	usuario.phone = req.body.phone;
		  	usuario.dni = req.body.dni;

		  	usuario.save(function(err, newUsuario){
		  		if(err){
		  			sendJsonResponse(res, 404,err);
		  		    return;
		  		} else {
		  			sendJsonResponse(res, 200,newUsuario);		  		
		  		}
		  	});
		  	
		  });
	} else {
		sendJsonResponse(res, 404, {message: "No User iD" });		
	}
};