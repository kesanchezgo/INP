var mongoose = require( 'mongoose' );



var tipoSchema = new mongoose.Schema({
  nombreTipo: {type: String, required: true},
  descripcion: {type: String, required:true}
});

//JUGADOR
var jugadorSchema = new mongoose.Schema({
	anotaciones: {type: Number, "default": 0},
	posicionActual:String,
	posiciones:[String],

	tarjetas_amarillas:{type: Number, "default": 0},
	tarjetas_rojas:{type: Number, "default": 0}
});

//ARBITRO
var arbitroSchema = new mongoose.Schema({
	partidosTotal:{type: Number, "default": 0},
	tarjetas_amarillas_total:{type: Number, "default": 0},
	tarjetas_rojas_total:{type: Number, "default": 0}
});

//ADMIN

var adminSchema = new mongoose.Schema({
	descripcion: String     //general-equipo

});

//USER
var UserSchema = new mongoose.Schema({
  nombres: {type: String, required: true},
  apellidos: {type: String, required:true},
  mail: {type: String, required:true},
  contrasenia: {type: String, required:true},
  genero: {type: String, required:true},
  telefono:String,
  nacDia:Number,
  nacMes:Number,
  nacAnio:Number,
  dni:{type: String, required: true},
  tipos: [tipoSchema], //en realidad es [string]  jugador-arbitro admin
  jugador: jugadorSchema,

  arbitro: arbitroSchema,
  admin: adminSchema
});

 
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User', UserSchema); 