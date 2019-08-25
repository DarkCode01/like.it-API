const mongoose = require('mongoose');

const User = mongoose.Schema({
    gravatar: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    posts_creAted: [ mongoose.ObjectId ],
    birth: {
        type: Date,
        required: false,
        default: null
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', User);