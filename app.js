var express = require('express');
var logger = require('morgan');
var cors = require('cors');
const expressSanitizer = require('express-sanitizer');
var session = require('express-session');
var config = require('config');

// Libraries
var responseMessages = require('./lib/response-messages');
var authentication = require('./middlewares/authentication');

// Routes
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();


app.use(session({ secret: config.get('express-session-secret'), saveUninitialized: true, resave: true, cookie: { maxAge: 3600000, expires: new Date(Date.now() + 3600000) }})); // 1 Hours


// Enable CORS
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Mount express-sanitizer middleware here
app.use(expressSanitizer());

// Authenticate all requests
app.use(function(req, res, next) {
	authentication.authRequest(req, res, next);
});


// API Calls
app.use('/v1/users', usersRouter);
app.use('/v1/products', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    response = responseMessages.commonResponse(responseMessages.NOT_FOUND);
    res.status(404).json(response);
});

// error handler
app.use(function(err, req, res, next) {

  response = responseMessages.commonResponse(responseMessages.UNKNOWN_ERROR, "", "", err.message);
  res.status(500).json(response);
});

module.exports = app;
