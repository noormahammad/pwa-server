var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var words = require('./routes/words');
var friends = require('./routes/friends');
var games = require('./routes/games');
var realtime = require('./routes/realtime');


var app = express();
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

var socketFile = require('./socket.js')(io);

//server.listen(5000);  

var mongoose = require('mongoose');
//var db = 'mongodb://trang2uet:pwa@ds049631.mlab.com:49631/pwa';


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
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

app.use(function(req, res, next){
  res.io = io;
  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/words', words);
app.use('/friends', friends);
app.use('/api/games', games);
app.use('/api/realtime', realtime);


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