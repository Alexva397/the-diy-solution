const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    googleId: {
        type: String,
        required: false,
    },
    facebookId: {
        type: String,
        required: false,
    },
});

userSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();
    bcrypt.hash(this.password, 10, (err, hashedPw) => {
        if (err)
            return next(err);
        this.password = hashedPw;
        next();
    });
});

userSchema.methods.validatePassword = function (plaintextPassword, done) {
    bcrypt.compare(plaintextPassword, this.password, (err, result) => {
        if (err) {
            return err;
        }
        else {
            if (!result) {
                return done(null, result);
            }
            return done(null, this);
        }
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;