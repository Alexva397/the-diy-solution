const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../../config/passportConfig');
const User = require('../../models');

// router.post('/register', (req, res) => {
//     const { username, email, password } = req.body;

//     User.findOne({ username }, (err, user) => {
//         if (err) {
//             res.status(500).json();
//         }
//         if (user) {
//             res.status(400).json({ message: 'error' });
//         }
//     })
// });



module.exports = router;