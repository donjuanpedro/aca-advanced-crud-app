const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Require Routes
const posts = require('./routes/posts');


// Set up database
const mongoose = require('mongoose');
// TODO: You need to write the line to connect to the mongo database
mongoose.connect('mongodb://localhost/aca-advanced-crud-app');
// Create our instance of our app
const app = express();

app.use(methodOverride("_method"));

// Add middleware
app.use(bodyParser.urlencoded({ extended: false }));
// TODO: Add a comment here explaining, briefly, what bodyParser is doing to our request
//Allows us to access inputs on the 'req' object under the 'body' attribute.
// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set our directory for serving static files
app.use(express.static('public'));

// Registering a simple route to redirect to '/posts'
app.get('/', (req, res, next) => {
  res.redirect('/posts');
});

// Register our routes
// TODO: Register our `posts` routes name-spaced under '/posts'
app.use('/posts', posts);

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
