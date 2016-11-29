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
router.get('/team',	ctrlTeam.teamInfo);
router.get('/team/players', ctrlTeam.players);
router.get('/team/scores', ctrlTeam.scores);

router.get('/profile/user/:userid',	ctrlUser.profile);
router.delete('/admin/:userid', ctrlAdmin.deleteOneUser);
router.put('/admin/:userid', ctrlAdmin.updateOneUser);
/* Other pages */
router.get('/admin', ctrlAdmin.admin);
router.get('/admin/:userid', ctrlAdmin.readOneUser);
router.get('/admin/user/listUser', ctrlAdmin.listUsers);

module.exports = router;
