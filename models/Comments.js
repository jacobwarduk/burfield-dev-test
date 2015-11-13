var mongoose = require('mongoose');

// Schema for comments
var CommentSchema = new mongoose.Schema(
    {
        body: String,
        author: String,
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    }
);

mongoose.model('Comment', CommentSchema);
