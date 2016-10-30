var mongoose = require( 'mongoose' );



var tipoSchema = new mongoose.Schema({
  nombreTipo: {type: String, required: true},
  descripcion: {type: String, required:true}
});

var UserSchema = new mongoose.Schema({
  nombre: {type: String, required: true},
  apellido: {type: String, required:true},
  mail: String,
  contrasenia: String,
  genero:String,
  telefono:String,
  nacDia:Number,
  nacMes:Number,
  nacAnio:Number,
  tipos: [tipoSchema]
});

mongoose.model('User', UserSchema);
