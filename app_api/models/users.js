var mongoose = require( 'mongoose' );


/*var tipoSchema = new mongoose.Schema({
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
*/
//USER
var userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  lastname: {type: String, required:true},
  email: {type: String, required:true},
  password: {type: String, required:true},
  sex: {type: Number, required:true},
  phone:String,
  nacDia:Number,
  nacMes:String,
  nacAnio:Number,
  dni:{type: String, required: true},
  type: String //en realidad es [string]  jugador-arbitro admin
  //jugador: jugadorSchema,

  //arbitro: arbitroSchema,
  //admin: adminSchema
});
console.log("creado schema!");
 
mongoose.model('user', userSchema);
