var mongoose = require('mongoose');

// Schema for posts
var PostSchema = new mongoose.Schema(
    {
        title: String,
        body: String,
        category: String,
        link: String,
        author: String,
        image: String, 
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    }
);

mongoose.model('Post', PostSchema);
