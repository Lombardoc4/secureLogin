const users = require('express').Router();
// define the Express app

//importing model queries
const all = require('./allUsers');
const single = require('./user');

const plants = require('./plants');

users.use('/:userId/plants', plants);

// retrieve ALL users
users.get('/', all);

// retrieve ONE user
users.get('/:userId', single);


module.exports = users;
