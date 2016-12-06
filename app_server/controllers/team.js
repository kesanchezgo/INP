var request = require('request');


module.exports.teamInfo = function(req, res)  {
  res.render('team-info', {title: 'Gestor - Equipo'});
};

module.exports.players =function(req, res) {
  res.render('players-info', {title: 'Gestor - Jugadores'});
};

module.exports.scores =function(req, res) {
  res.render('team-score', {title: 'Gestor - Resultado'});
};

var apiOptions = {
  server:"http://localhost:3000"
};
/* show Teams */
module.exports.listTeams = function(req, res){
    console.log("akiiiii");
	var requestOptions, path;
	var filter = req.params.filter;
	var entry = req.params.entry;

	path = "/api/team/listTeams/"+filter+"/"+entry;
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
	 	res.render('content-list-team',{
	 		title: "Lista de Equipos",
	 		teams: data,
	 		amount: body.length
	 	});
	 }	 
	);
	
};

module.exports.team = function(req, res){
	res.render('show-teams', {title:"Encuentra a tu Equipo!", amount:0});
};


module.exports.register = function(req, res){
  res.render('form-register-team', {title:"Registro de Equipo"});
};


module.exports.registerTeam = function(req, res){

  var requestOptions, path, postdata;  
  //var sexo = (req.body.sex == "Masculino") ? 1:0;

  path= '/api/team/register'; 
  postdata = {
    name_team: req.body.name_team,
    coach_team: req.body.coach_team,
    ciudad_team : req.body.ciudad_team,
    description_team: req.body.description_team,    
    category_team: req.body.category_team    
  };
   
  
  requestOptions = {
    url: apiOptions.server + path,
    method: "POST",
    json: postdata
  };  
  request(requestOptions,
  function(err, response, body){
    if(!err){
      if(response && response.statusCode === 201){        
        console.log("Exito al registrar EQuipo!");
         
         res.render('show-teams', {title:"Encuentra a tu Equipo!", amount:0});        

      } else{
         console.log("No existe!");
      }
    }
    else { console.log("ERROR!");}
  });


};