var request = require('request');

var apiOptions = {
  server:"http://localhost:3000"
};


// mostrar pagina de registro
module.exports.register = function(req, res)  {
  res.render('register', {title: 'Gestor - Registro'});
};

// crear Usuario

module.exports.doRegisterUser = function(req, res){
 
  var requestOptions, path, postdata;

  path= '/api/registerUser'; 
  postdata = {
    name: req.body.name,
    lastname: req.body.lastname,
    email : req.body.email,
    password: req.body.password,
    dni: req.body.dni,
    phone: req.body.phone,
    sex : req.body.sex
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
        var data;
          data = body;
          res.render('user-profile',{name:data.name, lastname:data.lastname, email:data.email, dni:data.dni, phone: data.phone});        

      } else{
         console.log("No existe!");
      }
    }
    else { console.log("ERROR!");}
  });
};

  

