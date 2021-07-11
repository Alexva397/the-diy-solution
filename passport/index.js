const passport = require('passport');
const localStrategy = require('./localStrategy');
const User = require('../models/user');


passport.serializeUser(function (user, done) {
    onsole.log('----Serialize User called----');
    console.log(user);
    done(null, { _id: user._id });
});
  
passport.deserializeUser(function (id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });

    User.findOne({ _id: id }, (err, user) => {
        console.log('----Deserialize User called----');
        console.log(user);
        done(null, user);
    })
});

passport.use(localStrategy);

module.exports = passport;