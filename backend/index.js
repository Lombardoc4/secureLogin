const dotenv = require('dotenv').config()

//import dependencies
const express = require('express'),
      bodyParser = require('body-parser'),
      // session = require('express-session'),
      cors = require('cors');

require('./config/passport')
const routes = require('./routes');

// define the Express app
const app = express();

app.use('/', routes)
app.use(bodyParser.json());
app.use(cors());

// start the server
app.listen(process.env.PORT, () => {
  console.log('listening on port... ');
});
