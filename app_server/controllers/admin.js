var request = require('request');

var apiOptions = {
  server:"http://localhost:3000"
};

module.exports.admin = function(req, res){
	res.render('admin',{title:'admin'});

};


//obtener lista de Usuarios
module.exports.listUsers = function(req, res){
   
	var requestOptions, path;
	path = '/api/user/listUser';
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json:{},
		qs:{}
	}
	request(requestOptions,
	 function(err, response, body){
	 	var data;
	 	data = body;	 	
	 	res.render('content',{
	 		title: "Lista de Usuarios",
	 		usuarios: data,
	 		amount: body.length
	 	});
	 }	 
	);
};


//eliminar Usurio
module.exports.deleteOneUser = function(req, res){
	
	var requestOptions, path;
	path = '/api/admin/' + req.params.userid;
	requestOptions = {
		url: apiOptions.server + path,
		method: "DELETE",
		json: {}
	}
	request(requestOptions,
		function(err, response, body){
			if(!err){
				res.send({success: true});				
			} else {
				res.send({success: false});
			}
		}
	);

};

//GET one User
module.exports.readOneUser = function(req, res){
   var requestOptions, path, data;
	path = '/api/admin/' + req.params.userid;
	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {}
	}

	request(requestOptions,
		function(err, response, body){
			if(!err){
				if(body){
					console.log("Encontrado!"+ body.length);
				    res.send({data: body});
				}								
			}
			else console.log("ERRROR AL obtenr data");

		}
	);
};

//actualizar usaurio
module.exports.updateOneUser = function(req, res){
   
   var requestOptions, path, putdata;
   path = '/api/admin/'+ req.params.userid;
    

   putdata = {
   	   name : req.body.name,
       lastname : req.body.lastname,
       email : req.body.email,
       phone : req.body.phone,
       dni: req.body.dni
    };
   requestOptions = {
		url: apiOptions.server + path,
		method: "PUT",
		json: putdata
	}

	request(requestOptions,
		function(err, response, body){

			if(!err){
				if(body){					
				    res.send({data: body, success:true});
				}
				else {res.send({ success:false });}								
			}
			else{
				console.log("ERRROR AL Actualizar");
				res.send({ success:false});
			} 

		}
	);

};