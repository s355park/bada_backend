const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true
    },
    postAuthorId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    hashtagArray: [{
        type: String,
        required: true
    }],
    meta: {
        type: String,
        required: true
    },
    commentArray: [{
        commentId: {
            type: String,
            required: true
        },
        commentAuthorId: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        meta: {
            type: String,
            required: true
        },
        replyArray: [{
            replyId: {
                type: String,
                required: true
            },
            replyAuthorId: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            meta: {
                type: String,
                required: true
            }, 
        }]
    }]
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;