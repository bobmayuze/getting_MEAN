var express = require('express');
var router = express.Router();
// var ctrlMain = require('../controllers/main');
// main there refers to main.js
// Listing 4.1 Requiring the controller files in routes/index.js
var ctrlLocations = require('../controllers/locations');
var ctrlOthers


/* GET home page. */
router.get('/', ctrlMain.index);


module.exports = router;
