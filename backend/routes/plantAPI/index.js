const plants = require('express').Router();
// define the Express app

const findObject = require('../../utils/findObject');

//importing model queries
const all = require('./allPlants');
const single = require('./plant');

//check to make sure object exists
plants.param('plantId', findObject('plant'));

// retrieve ALL users
plants.get('/', all);

// retrieve ONE user
plants.get('/:plantId', single);


module.exports = plants;
