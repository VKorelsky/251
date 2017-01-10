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
app.get('/', (request, response) => {
  //Fetch data in database

  response.render('home', {
    name: 'world'
  })
})

app.post('/submission', (request, response) => {
  // Save post to DB
  //return a json - 200 OK, 500 ERROR
  console.log(request);
  response.json(200, {msg: 'OK'})
})

// error logging middleware
app.use((err, request, response, next) => {
  console.log(err)
  response.status(500).send('Something broke!')
})


// Run
app.listen(port, console.log(`server is listening on ${port}`))
