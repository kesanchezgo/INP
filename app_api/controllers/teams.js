var mongoose = require('mongoose');
var Team = mongoose.model('teams');


var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

/* List Teams */
module.exports.listTeams = function(req, res){	
	var filter = req.params.filter;
	var entry = req.params.entry;	
    
    if(filter == "Ciudad"){
    		console.log("Ciudad: "+filter+" "+entry);
    	Team
    	.find({  ciudad : entry})
	    .exec(function(err, _teams){
	    	if(!_teams){
	    		console.log("No hay Equipos!")
	  		    return;
	  	    } else if(err){
	  		    console.log("ERROR!")
	  		    return;
	  	    }
	  	//console.log("Numero  de usuarios"+usuarios.length);
	  	sendJsonResponse(res, 200, _teams);
	    });
	}
	else if(filter == "Nombre"){
		 console.log("Nombre: "+filter+" "+entry);
		Team
    	.find({  nombre : entry})
	    .exec(function(err, _teams){
	    	if(!_teams){
	    		console.log("No hay Equipos!")
	  		    return;
	  	    } else if(err){
	  		    console.log("ERROR!")
	  		    return;
	  	    }
	  	//console.log("Numero  de usuarios"+usuarios.length);
	  	sendJsonResponse(res, 200, _teams);
	    });
	}
	else if(filter == "Entrenador"){
		Team
    	.find({  entrenador : entry})
	    .exec(function(err, _teams){
	    	if(!_teams){
	    		console.log("No hay Equipos!")
	  		    return;
	  	    } else if(err){
	  		    console.log("ERROR!")
	  		    return;
	  	    }
	  	//console.log("Numero  de usuarios"+usuarios.length);
	  	sendJsonResponse(res, 200, _teams);
	    });
	}
	else if(filter == "Todos"){
		Team
    	.find()
	    .exec(function(err, _teams){
	    	if(!_teams){
	    		console.log("No hay Equipos!")
	  		    return;
	  	    } else if(err){
	  		    console.log("ERROR!")
	  		    return;
	  	    }
	  	//console.log("Numero  de usuarios"+usuarios.length);
	  	sendJsonResponse(res, 200, _teams);
	    });
	}
	else {
		sendJsonResponse(res, 200, {message:"No se encontraron resultados!"});

	}
};


/* Register Teams */
module.exports.registerTeam = function(req, res){   
    console.log("En api para Team");
	Team.create({
		nombre: req.body.name_team,        
        descripcion: req.body.description_team,
        entrenador: req.body.coach_team,
        ciudad : req.body.ciudad_team,
        category: req.body.category_team       
	}, function(err, teams){
		if(err){
			console.log("ERROR Team!");
            sendJsonResponse(res, 400, err);
			//res.redirect('/');
		} else {
			console.log("Good Team!");
			sendJsonResponse(res, 201, teams);
			//res.redirect('/');
		}
	});
};


