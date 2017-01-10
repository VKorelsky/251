const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/assets'));

// Routes
app.get('/', (request, response) => {
  //Fetch data in database

  response.render('home', {
    name: 'world'
  })
})

app.post('/', (request, response) => {
  // Save post to DB
  //return a json - 200 OK, 500 ERROR


  response.render()
})

// error logging middleware
app.use((err, request, response, next) => {
  console.log(err)
  response.status(500).send('Something broke!')
})


// Run
app.listen(port, console.log(`server is listening on ${port}`))
