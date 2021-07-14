const passport = require('passport');
const localStrategy = require('./localStrategy');
const googleStrategy = require('./googleStrategy');
const User = require('../models/user');


passport.serializeUser(function (user, done) {
    console.log('----Serialize User called----');
    console.log(user);
    done(null, { _id: user._id });
});
  
passport.deserializeUser(function (id, done) {
    console.log(id, done);
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });

    User.findOne({ _id: id }, (err, user) => {
        console.log('----Deserialize User called----');
        console.log(user);
        done(null, user);
    })
});

passport.use('google', googleStrategy);
passport.use('local', localStrategy);

module.exports = passport;