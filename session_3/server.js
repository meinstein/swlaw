// Import (ie, require) our express module that we installed in our project via NPM.
// The relevant command is: `npm install express --save`
// When you run the above command, Node.js reaches out to the online directory of modules
// at NPMJS.com and installs the code for 'express' that it finds there.
// In order to keep track of what modules (and their respective versions) have been installed,
// Node.js creates an entry in that special file called 'package.json' that we added to our project.
// The 'package.json' is just a data object that will always sit at the root level of our project.
// The physical code for the package that we have installed will go into a folder (also at the root level)
// called 'node_modules'. Node automatically creates this folder when we install our first NPM module.
const express = require('express')
// This is another module that we will use
// However, unlike express, this is a built-in node module that you can use
// without any additional installation. All you must do it import it in.
const path = require('path')

// Now the magic happens
// Create an express application by simply calling the top-level express() function.
// This one line is pretty powerful. In doing this, we made a full-fledged HTTP server.
const app = express()

// Save the path to our static files in a variable
const staticFilesPath = path.join(__dirname, 'static')

// The first argument of express.static method specifies
// the root directory from which to serve our static assets
// Again, this is precisely why developers use modules like express.
// If we were to do this using plain old Node.js, it would require
// much, much more code that simply this. We'd have to manually suss out
// out all the files and assets in the directoy that we'd return to each request.
const staticFiles = express.static(staticFilesPath)

// Now that we told express where our static files live, we must simply give our application
// some middleware in order to actually serve our files.
// We accomplish this with some middleware (i.e., the 'use' method on the app we created.)
// Middleware are functions that get called every time a reqest hits our server.
// In this case, we will always serve the incoming request with our static directory.
app.use(staticFiles)

// Lastly, tell our server called app (see our variable declaration on line 12)
// to start listening for incoming HTTP requests on port 3000.
// And BOOM - we have a server.
app.listen(3000)
