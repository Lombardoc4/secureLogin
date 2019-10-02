const routes = require('express').Router();

const userRouter = require('./userAPI/index.js');
const plantRouter = require('./plantAPI/index.js');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/users', userRouter);
routes.use('/plants', plantRouter);

module.exports = routes;
