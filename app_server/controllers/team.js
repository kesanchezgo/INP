module.exports.teamInfo = function(req, res)  {
  res.render('team-info', {title: 'Gestor - Equipo'});
};

module.exports.players =function(req, res) {
  res.render('players-info', {title: 'Gestor - Jugadores'});
};
