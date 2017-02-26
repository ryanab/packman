var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sessions = require('client-sessions')
var mongoose = require('mongoose')

var index = require('./routes/index');
var api = require('./routes/api');
var account  = require('./routes/account');
var shipstation  = require('./routes/shipstation');


var app = express();
require('dotenv').config()

var dbUrl = process.env.MONGODB_URI
mongoose.connect(dbUrl, function(err){
  if(err){
    console.log('Error connecting to: ' + dbUrl)
  }else{
    console.log('Connected successfully to: ' + dbUrl)
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sessions({
  cookieName: 'session',
  secret: process.env.SESSION_SECRET,
  duration: 24*60*60*1000, // 1 day
  activeDuration:30*60*1000
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', api);
app.use('/account', account);
app.use('/shipstation', shipstation);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
