var mongoose = require( 'mongoose' );

var Equipo = mongoose.model('Equipo');
var User = mongoose.model('User');
var Encuentro = mongoose.model('Encuentro');

var fixtureSchema = new mongoose.Schema({

	fechas:[{type: mongoose.Schema.ObjectId, ref: "Encuentro" }]
});

var TorneoSchema = new mongoose.Schema({
	nombre_torneo:String,

	descripcion:String,
	bases:String,  			//bases del torneo
	numero_equipos:Number,	//numero de equipos

	DiaInscripciones:Number,			//fecha limite de inscripciones OPCIONAL
	MesInscripciones:Number,
	AnioInscripciones:Number,

	sedes:[String],   //opcional crear DOC SEDE

	DiaInicio:Number,
	MesInicio:Number,
	AnioInicio:Number,

	DiaFin:Number,
	MesFin:Number,
	AnioFin:Number,

	premios:[String],

	equipos:[{type: mongoose.Schema.ObjectId, ref: "Equipo" }],
	fixture:fixtureSchema
});
//opcional agregar ubicaciones de encuentros
mongoose.model('Torneo', TorneoSchema);
