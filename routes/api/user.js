const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../../config/passportConfig');
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
            console.log(newUser);

            User.create(newUser)
                .then(newUserData => {
                    res.status(200).json(newUserData)
                })
                .catch(err => {
                    res.status(500).json(err);
                })
        }
    })
});


router.post('')


module.exports = router;