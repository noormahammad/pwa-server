var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var requireHTTPS = require('https');

var index = require('./routes/index');
var users = require('./routes/users');
var words = require('./routes/words');

var app = express();
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

var socketFile = require('./socket.js')(io);
var port =  process.env.PORT || 3000;

server.listen(port);  

var mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(require('express').static(require('path').join('dist')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.use(function requireHTTPS(req, res, next) {
  if (!req.secure && req.headers.host.indexOf('localhost') < 0) {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
})

app.use(function(req, res, next){
  res.io = io;
  next();
});

app.use('/', index);
app.use('/api/users', users);
app.use('/api/words', words);

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
  res.render('error.html');
});

module.exports = {app: app, server: server};
