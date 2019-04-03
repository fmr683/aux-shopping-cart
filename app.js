var express = require('express');
var logger = require('morgan');
var cors = require('cors');
const expressSanitizer = require('express-sanitizer');
var session = require('express-session');
var config = require('config');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Libraries
var responseMessages = require('./lib/response-messages');
var authentication = require('./middlewares/authentication');

// Routes
var index = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var cartsRouter = require('./routes/carts');

var app = express();


app.use(session({ secret: config.get('express-session-secret'), saveUninitialized: true, resave: true, cookie: { maxAge: 3600000 }})); // 1 Hours


// Enable CORS
app.use(cors());

// view engine setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
app.use('/', index);
app.use('/v1/users', usersRouter);
app.use('/v1/products', productsRouter);
app.use('/v1/cart', cartsRouter);

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
