const mongoose = require('mongoose');

const Post = mongoose.Schema({
    description: {
        type: String,
        required: false,
        default: "🥰..."
    },
    uniconrs: [ mongoose.ObjectId ]
});

module.exports = mongoose.model('Post', Post);