const plants = require('express').Router({ mergeParams: true });
// define the Express app

//importing model queries
const all = require('./allPlants');
const single = require('./plant');

// retrieve ALL plants
plants.get('/', all);

// retrieve ONE plant
plants.get('/:plantId', single);


module.exports = plants;
