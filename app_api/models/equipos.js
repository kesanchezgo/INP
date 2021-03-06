var mongoose = require( 'mongoose' );

//var Jugador = mongoose.model('User');

var equipoSchema = new mongoose.Schema({
	nombre: {type: String, required: true},
	descripcion: String,
	entrenador: String,
        ciudad: String,
        //logo: String,  
        category: String,
        ranking: Number,     
	campeonatos: [String], //campeonatos q participo
	logros: [String], //logros q alcanzo
	//jugadores: [{type: mongoose.Schema.ObjectId, ref: "Jugador" }]        

});
console.log("create model team!");
mongoose.model('teams', equipoSchema);
