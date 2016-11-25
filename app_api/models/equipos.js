var mongoose = require( 'mongoose' );

var Jugador = mongoose.model('User');

var equipoSchema = new mongoose.Schema({
	nombre: {type: String, required: true},
	descripcion: String,
	entrenador: String,
	campeonatos: [String], //campeonatos q participo
	logros: [String], //logros q alcanzo
	jugadores: [{type: mongoose.Schema.ObjectId, ref: "Jugador" }]



});
mongoose.model('Equipo', equipoSchema);
module.exports = mongoose.model('Equipo', equipoSchema);