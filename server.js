// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
var reload = require('reload');
const configMongoose = require('./server/config/mongoose')

const db = configMongoose();
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Allow cross origin requests
app.use(cors())
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', require('./server/routes/feedback'));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/* Get port from environment and store in Express. */
const port = process.env.PORT || '3000';
app.set('port', port);

var server = app.listen(app.get('port'), () => console.log(`API running on localhost:${port}`))

// Will be used later to test and debug
module.exports = app;
