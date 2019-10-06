const users = require('express').Router();
// define the Express app

const findObject = require('../../utils/findObject');

//importing queries
const all = require('./allUsers');
const single = require('./user');
const plants = require('./plants');
const add = require('./addUser');


//check to make sure object exists
users.param('userId', findObject('user'));

//One user -> ALL or ONE plants
users.use('/:userId/plants', plants);

// retrieve ALL users
users.get('/', all);

// retrieve ONE user
users.get('/:userId', single);

// ADD a user
users.post('/add', add);

module.exports = users;
