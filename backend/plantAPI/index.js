const plants = require('express').Router({ mergeParams: true });
// define the Express app

//importing model queries
const all = require('./allPlants');
const single = require('./plant');

// retrieve ALL users
plants.get('/', all);

// retrieve ONE user
plants.get('/:plantId', single);


module.exports = plants;
