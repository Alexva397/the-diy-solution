const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models');

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        if (err) {
            return done(err);
        }
        if(!user) {
            return done(null, false);
        }
        user.validatePassqord(password, done);
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});
  
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});