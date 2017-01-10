var mongoose = require('mongoose'),

    Schema = new mongoose.Schema({
             upvotes  : {type: Number, default: 0},
             title    : String,
             body     : String,
             date     : { type: Date, default: Date.now }
             }),

    Posts = mongoose.model('Post', Schema);

module.exports = Posts;
