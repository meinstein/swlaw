// import the express module that we installed via `npm install express`
// check your `package.json` to make sure it's there
const express = require('express')
// import the body-parser module that we installed via `npm install body-parser`
const bodyParser = require('body-parser')
// import the path module (comes with express, so must not install separately)
const path = require('path')

// invoke our express server and assign it to a variable for later use
const app = express()

// we tell express to intercept every incoming POST request to our server and
// check for potential JSON data
app.use(bodyParser.json())

// a function executed by a route will have a request and response argument
function postRequestHandler(request, response) {
  // the data we are expecting from the client is on the incoming request
  // and lives under the key 'body' - hence 'request.body' below
  console.log('Received a post request:', request.body)
  // we send a status code back to the client in order to indicate
  // whether a specific HTTP request has been successfully completed
  response.sendStatus(201)
}

// set up a route that listens for POST requests from a client on the '/form' path
app.post('/form', postRequestHandler)

// assign the file path for our static files (HTML/CSS/JavaScript) to a variable
const staticFilesPath = path.join(__dirname, 'static')

// tell express's static method (ie, .static) where our static files are
const staticFiles = express.static(staticFilesPath)

// tell our app to return our static files on all incoming requests from clients
app.use(staticFiles)

// tell our server which port to listen on
app.listen(3000)
