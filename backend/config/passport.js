const data = require('../data.json');


var LocalStrategy = require('passport-local'),
    passport = require('passport');

passport.use(new LocalStrategy(
  function(username, password, done) {
    data.users.find({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  data.users.find(id, function(err, user) {
    done(err, user);
  });
});
