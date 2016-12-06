var express = require('express');
var router = express.Router();
var ctrlRegister = require('../controllers/register');
var ctrlTeam = require('../controllers/teams')
// API para Usuario
//Registro usuario
router.post('/registerUser', ctrlRegister.userCreate);
//lista de usuarios
router.get('/user/listUser', ctrlRegister.listUser);
//eliminar Usurio
router.delete('/admin/:userid', ctrlRegister.deleteOneUser);
//update User
router.put('/admin/:userid', ctrlRegister.updateOneUser);
router.get('/admin/:userid', ctrlRegister.readOneUser);
//perfil de usuario
router.get('/profile/user/:userid', ctrlRegister.getOneUser);


/* Teams */
router.get('/team/listTeams/:filter/:entry', ctrlTeam.listTeams);
router.post('/team/register', ctrlTeam.registerTeam);
module.exports = router;
