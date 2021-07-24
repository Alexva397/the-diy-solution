const router = require('express').Router();
const passport = require('passport');
const User = require('../../models/user');
const auth = require('../../utils/auth');


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
        return res.json({ message: 'Username or password incorrect. Please try again.' })
        // const redir = { redirect: '/login' };
        // return res.json(redir);
    }
});


// get user object for context
router.get('/getuser', auth, (req, res) => {
    const { username, _id, projects } = req.user
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
        res.redirect('https://warm-caverns-74106.herokuapp.com/landing' || 'http://localhost:3000/landing');
    });

// ------------------ Facebook routes ----------------------

router.get('/auth/facebook',
    passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('https://warm-caverns-74106.herokuapp.com/landing' || 'http://localhost:3000/landing');
    });

// ------------------ Twitter routes ----------------------

router.get('/auth/twitter',
    passport.authenticate('twitter'));

router.get('/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('https://warm-caverns-74106.herokuapp.com/landing' || 'http://localhost:3000/landing');
    });


module.exports = router;