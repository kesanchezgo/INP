var mongoose = require( 'mongoose' );

var Equipo = mongoose.model('Equipo');
var User = mongoose.model('User');



var EncuentroSchema = new mongoose.Schema({

	Dia:Number,
	Mes:Number,
	Anio:Number,

	arbitro: {type: mongoose.Schema.ObjectId, ref: "User" },

	equipo1: {type: mongoose.Schema.ObjectId, ref: "Equipo" },
	equipo2: {type: mongoose.Schema.ObjectId, ref: "Equipo" },

	anotadores: [{type: mongoose.Schema.ObjectId, ref: "User" }],

	equipo_ganador:{type: mongoose.Schema.ObjectId, ref: "Equipo" },

	score:String,

	observaciones: String,

	tarjetas_amarillas:{type: Number, "default": 0},
	tarjetas_rojas:{type: Number, "default": 0},

	amonestados:[{type: mongoose.Schema.ObjectId, ref: "User" }]


});
mongoose.model('Encuentro', EncuentroSchema);
module.exports = mongoose.model('Encuentro', EncuentroSchema);