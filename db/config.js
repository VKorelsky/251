var seed = require('seed-mongoose')({
            path : 'db/seeds'
        });

var mongoose = require('mongoose'),
    path = require('path');

require(path.join(__dirname, '/..', 'models/Posts/Posts.js'));

// Database
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection established");
});
