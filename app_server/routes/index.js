var express = require('express');
var router = express.Router();

var ctrlTeam =	require('../controllers/team');
var ctrlRegister = require('../controllers/register');
var ctrlUser = require('../controllers/user');
var ctrlHome = require('../controllers/home');
var ctrlAdmin = require('../controllers/admin');


/* Locations pages */
router.get('/', ctrlHome.home);
router.get('/register',	ctrlRegister.register);
router.post('/register', ctrlRegister.doRegisterUser);
router.get('/myTeam',	ctrlTeam.teamInfo);
router.get('/team/players', ctrlTeam.players);
router.get('/team/scores', ctrlTeam.scores);

router.get('/profile/user/:userid',	ctrlUser.profile);
router.delete('/admin/:userid', ctrlAdmin.deleteOneUser);
router.put('/admin/:userid', ctrlAdmin.updateOneUser);
/* Other pages */
router.get('/admin', ctrlAdmin.admin);
router.get('/admin/:userid', ctrlAdmin.readOneUser);
router.get('/admin/user/listUser', ctrlAdmin.listUsers);


/* Equipos */
router.get('/team/listTeams/:filter/:entry', ctrlTeam.listTeams); // consultar sobre lista
router.get('/team',ctrlTeam.team); // pagina de equipos
router.get('/myTeam/register', ctrlTeam.register); //registrar Equipo
router.post('/team/register', ctrlTeam.registerTeam);
/* load age's */

router.get('/page', function(req, res){
	res.render('content');
});


module.exports = router;
