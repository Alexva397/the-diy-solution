const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.pre('save', function(next) {
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password, 10, (err, hashedPw) => {
        if(err)
            return next(err);
        this.password = hashedPw;
        next();
    });
});

userSchema.methods.validatePassword = function(plaintextPassword, done) {
    bcrypt.compare(plaintextPassword, this.password, (err, result) => {
        if (err) {
            return err;
        }
        else {
            if(!result) {
                return done(null, result);
            }
            return done(null, this);
        }
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;