var express = require('request');


var apiOptions = {
	server: "http:://localhost:3000"
};

//redireccionar a usuario registrado
module.exports.profile = function(req, res)  {
	console.log("en profile");
	var path, apiOptions, userid;
	userid = req.params.userid;
	path = "/api/profile/"+req.params.userid;

	requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json:{}
	}
	request(requestOptions, function(err, response, body){
		if(!err){
			if(response && response.statusCode === 200){				
				console.log("exito!");
				var data;
			    data = body;
			    res.render('user-profile',{name:data.name, lastname:data.lastname});
			}			
		}
		console.log("error!");
	});
  
};


