const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

const strategy = new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, isMatch) => {
        if (err) {
            return done(err);
        }
        if(!isMatch) {
            return done(null, false, { message: 'Incorrect Username' });
        }
        return isMatch.validatePassword(password, done);
    });
});

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

module.exports = strategy;


