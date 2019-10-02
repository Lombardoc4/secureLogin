const dotenv = require('dotenv').config()

//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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
