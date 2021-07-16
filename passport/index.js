const passport = require('passport');
const localStrategy = require('./localStrategy');
const googleStrategy = require('./googleStrategy');
const User = require('../models/user');


passport.serializeUser((user, done) => {
    console.log('----Serialize User called----');
    console.log(user._id);
    done(null, user._id );
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, doc) => {
        console.log('---docerialize doc called----');
       return done(null, doc); 
    })
});

passport.use('google', googleStrategy);
passport.use('local', localStrategy);

module.exports = passport;