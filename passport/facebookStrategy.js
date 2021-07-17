const passport = require('passport');
const User = require('../models/user');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();


const facebookStrategy = new FacebookStrategy(
    {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: 'http://localhost:3001/api/user/auth/facebook/callback',
    },
    function (accessToken, refreshToken, profile, done) {
        const { id, displayName } = profile;

        User.findOne({ facebookId: id }, (err, isMatch) => {
            if (err) {
                return done(err, false);
            }
            if (isMatch) {
                return done(null, isMatch);
            } else {
                const newFacebookUser = new User({
                    facebookId: id,
                    username: displayName.replace(/\s+/g, ''),
                });
                newFacebookUser.save((err, newUser) => {
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

module.exports = facebookStrategy;