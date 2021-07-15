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
    function (accessToken, refreshToken, profile, done) {
        // let dispName = profile.dispalyName;
        // let googleUsername = dispName.replace(/\s+/g, '');
        const { id, displayName } = profile;

        User.findOne({ googleId: id }, (err, isMatch) => {
            if (err) {
                return done(null, false);
            }
            if (isMatch) {
                return done(null, isMatch);
            } else {
                console.log(id)
                console.log(profile)
                const newGoogleUser = new User({
                    googleId: id,
                    username: displayName.replace(/\s+/g, ''),
                });
                newGoogleUser.save((err, newUser) => {
                    if (err) {
                        return done(null, false);
                    } else {
                        return done(null, newUser);
                    }
                });
            }
        });
        // return done(null, profile);
    }
)


module.exports = googleStrategy;