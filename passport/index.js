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
    User.findById(id, (err, user) => {
        console.log('---Deserialize user called----');
       return done(null, user); 
    })
});

passport.use('google', googleStrategy);
passport.use('local', localStrategy);

module.exports = passport;