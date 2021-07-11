const router = require('express').Router();
const passport = require('../../passport');
// const passportConfig = require('../../passport/localStrategy');
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

// router.post('/login', (req, res, next) => {
//     next();
// },
//     passport.authenticate('local', (req, res) => {
//         const userInfo = { username: req.user.username };
//         res.send(userInfo);
//     })
// );

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/' }))


router.get('/user', (req, res) => {
    console.log(req.user)
    res.send(req.user);
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});


module.exports = router;