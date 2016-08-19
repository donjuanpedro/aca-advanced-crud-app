const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// TODO: Write your PostModel schema here
// Hint: Don't for get to export it!
const postSchema = new Schema({
  'text': String,
});

module.exports = mongoose.model('Post', postSchema);
