var mongoose = require('mongoose');

// Schema for services
var ServiceSchema = new mongoose.Schema(
  {
    title: String,
    excerpt: String,
    description: String,
    image: String
  }
);

mongoose.model('Service', ServiceSchema);
