const dotenv = require('dotenv').config()

//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./userAPI/users.js');

// define the Express app
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users/', userRouter);

// retrieve all questions
app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

// start the server
app.listen(process.env.PORT, () => {
  console.log('listening on port... ');
});
