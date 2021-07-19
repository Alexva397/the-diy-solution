const router = require('express').Router();
const passport = require('passport');
const User = require('../../models/user');


function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated())
      return next();
    else
      res.json({ error: "User not authenticated" });
  }

router.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    User.findOne({ username: username }, (err, userMatch) => {
        if (err) {
            return res.status(500).json({ message: 'Error has occured' });
        }
        
        if (userMatch) {
            return res.json({
                error: `Sorry, already a user with the username: ${username}`
            });
        }
        const newUser = new User({
            username: username,
            email: email,
            password: password,
        });
        newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            return res.json(savedUser);
        });
    });
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    if (req.user) {
        const redir = { redirect: '/landing' };
        return res.json(redir);
    } else {
        const redir = { redirect: '/login' };
        return res.json(redir);
    }
});


// get user object for state
router.get('/getuser', ensureAuthenticated, (req, res) => {
    const { username, _id, projects} = req.user
    res.status(200).json({ isAuthenticated: true, user: { username, _id, projects } });
});

router.get('/logout', function (req, res) {
    if (req.user) {
        req.logout();
        res.send('logged out');
    }
});

// ------------------ Google 0auth2.0 routes ----------------------

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000/landing');
    });

// ------------------ Facebook routes ----------------------

router.get('/auth/facebook',
    passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('http://localhost:3000/landing');
});

module.exports = router;