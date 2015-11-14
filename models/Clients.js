var mongoose = require('mongoose');

// Schema for clients
var ClientSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    logo: String
  }
);

mongoose.model('Client', ClientSchema);
