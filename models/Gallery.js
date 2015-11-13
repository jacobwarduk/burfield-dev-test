var mongoose = require('mongoose');

// Schema for gallery
var GallerySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String
  }
);

mongoose.model('Gallery', GallerySchema);
