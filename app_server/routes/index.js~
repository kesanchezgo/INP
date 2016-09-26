var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var ctrlRegister =	require('../controllers/register');
var ctrlTeam =	require('../controllers/team');
var ctrlUser = require('../controllers/user');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/register',	ctrlRegister.register);
router.get('/team',	ctrlTeam.teamInfo);
router.get('/profile',	ctrlUser.profile);
/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
