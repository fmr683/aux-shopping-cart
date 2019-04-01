var express = require('express');
var logger = require('morgan');
var cors = require('cors');
const expressSanitizer = require('express-sanitizer');
var session = require('express-session');
var config = require('config');

var app = express();

// Enable CORS
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404).json(response);
});

// error handler
app.use(function(err, req, res, next) {

  res.status(500).json(response);
});

module.exports = app;
