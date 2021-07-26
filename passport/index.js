const passport = require('passport');
const localStrategy = require('./localStrategy');
const googleStrategy = require('./googleStrategy');
const facebookStrategy = require('./facebookStrategy');
const twitterStrategy = require('./twitterStrategy');
const User = require('../models/user');


passport.serializeUser((user, done) => {
    console.log('----Serialize User called----');
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
passport.use('facebook', facebookStrategy);
passport.use('twitter', twitterStrategy);

module.exports = passport;