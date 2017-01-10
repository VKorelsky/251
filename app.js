const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');

require(__dirname + "/db/config.js");

// Server
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/assets'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
var Posts = require(__dirname + "/models/Posts/Posts.js");

app.get('/', (req, res) => {
  posts = Posts.find( function(err, posts) {
    res.render('home', {
      posts : posts
    })
  })
})

app.post('/submission', (req, res) => {
  // Save new-post to DB

  console.log(req.params);
  res.json(200, {msg : 'OK'})
})

app.post('/upvote/:id', (req, res) => {
  // persist upvote to db
  console.log(req.params);
  res.json(200, {msg : 'OK'})
})


// middleware
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('Something broke!')
})


// Run
app.listen(port, console.log(`server is listening on ${port}`))
