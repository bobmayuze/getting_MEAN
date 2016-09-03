var express = require('express');
var router = express.Router();
// var ctrlMain = require('../controllers/main');
// main there refers to main.js
// Listing 4.1 Requiring the controller files in routes/index.js
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');


/* GET home pages. */
// router.get('/', ctrlMain.index);

/* GET Location pages. */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationinfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* GET Other pages. */
router.get('/about', ctrlOthers.about);



module.exports = router;
