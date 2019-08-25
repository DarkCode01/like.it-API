const mongoose = require('mongoose');
const utils = require('../utils');


const User = mongoose.Schema({
    gravatar: {
        type: String,
        required: false
    },
    nickname: {
        type: String,
        required: true,
        unique: true,
        set: utils.lower
    },
    fullName: {
        type: String,
        required: true,
        set: utils.lower
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    postsCreated: [{
        type: mongoose.ObjectId,
        ref: 'Post',
        validateExistance: true
    }],
    birth: {
        type: Date,
        required: false,
        default: null
    },
    bio: {
        type: String,
        required: false,
        default: "🤓"
    },
    password: {
        type: String,
        required: true,
        set: utils.setPassword
    },
    active: {
        type: Boolean,
        required: false,
        default: false
    }
});


User.pre('save', function(next) {
    this.gravatar = utils.gravatar(this.email);

    next();
});


module.exports = mongoose.model('User', User);