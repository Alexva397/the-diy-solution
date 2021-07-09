const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models');
// 
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        if (err) {
            return done(err);
        }
        if(!user) {
            return done(null, false);
        }
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    });
}));

