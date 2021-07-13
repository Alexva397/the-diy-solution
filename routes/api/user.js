const router = require('express').Router();
const passport = require('passport');
const User = require('../../models/user');


router.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    User.findOne({ username }, (err, user) => {
        if (err) {
            res.status(500).json({ message: 'Error has occured' });
        }
        if (user) {
            res.status(400).json({ message: 'Username is already in use.' });
        }
        else {   
            const newUser = new User({ username, email, password });

            User.create(newUser)
                .then(newUserData => {
                    res.status(200).json(newUserData);
                    req.session.username = username;
                    console.log(req.session);
                    console.log(newUserData);
                })
                .catch(err => {
                    res.status(500).json(err);
                })
        }
    })
});

// router.post('/login', passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/' }))

router.post('/login', function(req, res, next) {
		console.log(req.body);
		next();
	},
	passport.authenticate('local'), (req, res) => {
		const user = JSON.parse(JSON.stringify(req.user));
		const cleanUser = Object.assign({}, user);
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`);
			delete cleanUser.local.password;
		}
		res.json({ user: cleanUser });
	}
);

// get user object for state
router.get('/getuser', (req, res) => {
    console.log(req.user)
    res.send(req.user);
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});



// ------------------ Googule 0auth2.0 routes ----------------------

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));


router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/landing');
});



module.exports = router;