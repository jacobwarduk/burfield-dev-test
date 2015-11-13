var mongoose = require('mongoose');

// Schema for team members
var TeamSchema = new mongoose.Schema(
  {
    name: String,
    position: String,
    description: String,
    photo: String
  }
);

mongoose.model('Team', TeamSchema);
