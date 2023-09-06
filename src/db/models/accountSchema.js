const mongoose = require("mongoose");
const schema = mongoose.Schema;

const accountSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    pfp_url: {
        type: String,
        required: false
    },
    school: {
        type: String,
        required: true,
    },
    friends: [{
        type: String,
        required: true
    }],
    friendRequests: [{
        type: String,
        required: true
    }],
    postsOwned: [{
        type: String,
        required: true
    }]
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;