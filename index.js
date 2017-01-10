const express = require('express')
const app = express()
const port = 3000

var num = 0

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, console.log("Listening on port 3000"))

// error handling middleware
app.use((err, request, response, next) => {
  console.log(err)
  response.status(500).send('Something broke!')
})
