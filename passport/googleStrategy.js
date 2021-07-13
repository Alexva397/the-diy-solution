const passport = require('passport');
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const googleStrategy = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3001/api/user/auth/google/callback',
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        // User.findOrCreate({ googleId: profile.id }, function(err, user) {
        //     return done(err, user);
        // })
        return done(null, profile);
    }
)


module.exports = googleStrategy;