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
mongoose.connect(pass, {dbName : 'PlantEnvi'});

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

// start the server
app.listen(process.env.PORT, () => {
  console.log('listening on port... ');
});

// yes really all of that
