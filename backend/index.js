const dotenv = require('dotenv').config()

//import dependencies
const express = require('express'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      // session = require('express-session'),
      cors = require('cors'),
      mongoose = require('mongoose');

require('./config/passport');
const routes = require('./routes');

// define the Express app

const app = express();


// migrate all this to config folder
app.use(cors());
const pass = process.env.MONGO + '';
mongoose.connect(pass, {dbName: 'allUsers'});

const connection = mongoose.connection;
connection.once('openURI', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/', routes)
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

// start the server
app.listen(process.env.PORT, () => {
  console.log('listening on port... ');
});

// yes really all of that
