var mongoose = require( 'mongoose' );

var UserSchema = new mongoose.Schema({
  nombre: {type: String, required: true},
  apellido: {type: String, required:true},
  mail: String,
  contrasenia: String,
  genero:String,
  telefono:String,
  nacDia:Number,
  nacMes:Number,
  nacAnio:Number
});

mongoose.model('User', UserSchema);
