const passport = require('passport');
const User = require('../models/user');
const TwitterStrategy = require('passport-twitter').Strategy;
require('dotenv').config();


const twitterStrategy = new TwitterStrategy(
    {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: 'http://localhost:3001/api/user/auth/twitter/callback',
    },
    function(token, tokenSecret, profile, done) {
        const { id, displayName } = profile;

        console.log(profile);
        User.findOne({ googleId: id }, (err, isMatch) => {
            if (err) {
                return done(err, false);
            }
            if (isMatch) {
                return done(null, isMatch);
            } else {
                const newTwitterUser = new User({
                    twitterId: id,
                    username: displayName.replace(/\s+/g, ''),
                });
                newTwitterUser.save((err, newUser) => {
                    if (err) {
                        return done(err, false);
                    } else {
                        return done(null, newUser);
                    }
                });
            }
        });
        // return done(null, profile);
    }
) 

module.exports = twitterStrategy;