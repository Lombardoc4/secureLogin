const dotenv = require('dotenv').config()

//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./userAPI/index.js');
const plantRouter = require('./plantAPI/index.js');


// define the Express app
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/plants', userRouter);

// start the server
app.listen(process.env.PORT, () => {
  console.log('listening on port... ');
});

// retrieve all questions
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Connected!' });
});
