const passport = require('passport');
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const googleStrategy = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'https://warm-caverns-74106.herokuapp.com/api/user/auth/google/callback' || 'http://localhost:3001/api/user/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
        const { id, displayName } = profile;

        User.findOne({ googleId: id }, (err, isMatch) => {
            if (err) {
                return done(err, false);
            }
            if (isMatch) {
                return done(null, isMatch);
            } else {
                const newGoogleUser = new User({
                    googleId: id,
                    username: displayName.replace(/\s+/g, ''),
                });
                newGoogleUser.save((err, newUser) => {
                    if (err) {
                        return done(err, false);
                    } else {
                        return done(null, newUser);
                    }
                });
            }
        });
    }
)


module.exports = googleStrategy;