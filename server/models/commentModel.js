// commentModel.js
const mongoose = require('mongoose');

// Get access to Schema constructor.
var Schema = mongoose.Schema;

// Create a new schema for the app.
var schema = new Schema({
    username: String,
    usercomment: String,
    createdAt: Date
  });

// Assign current date to createdAt.
schema.pre('save', function(next){
  this.createdAt = new Date();
  next();
})

// Export the model with an associated name and schema.
module.exports = mongoose.model('Comment', schema);
