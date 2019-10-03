const routes = require('express').Router();
const passport = require('passport');

const userRouter = require('./userAPI/index.js');
const plantRouter = require('./plantAPI/index.js');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/users', userRouter);
routes.use('/plants', plantRouter);

routes.get('/login', function(req, res) {
  res.send('login')
});

routes.post('/login', function(req, res) {
  res.send('fail', pass.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/user'
  }))
});

module.exports = routes;
