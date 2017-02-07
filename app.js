var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var words = require('./routes/words');

var Word = require('./models/word.model');

var app = express();
var mongoose = require('mongoose');

var db = 'mongodb://trang2uet:pwa@ds049631.mlab.com:49631/pwa';

mongoose.connect(db, function (error) {
    if (error) {
        console.log(error);
    }
}); // connect to our databas


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

app.use('/', index);
app.use('/users', users);
app.use('/words', words);

app.post('/test', function (req, res) {
  res.send('Got a POST request')
})


// Get all words
app.get('/api/words', function(req, res) {
	console.log('searching...');
    // use mongoose to get all words in the database
    Word.find(function(err, words) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        res.json(words); // return all reviews in JSON format
    });
});

app.get('/api/word/:id', function(req, res) {
	Word.findOne({
		_id: req.params.id
	})
	.exec(function(err, word) {
		if(err) {
			res.send('error occured');
		} else {
			console.log(word);
			res.json(word);
		}
	})
});

app.post('/api/word', function(req, res) {
	Word.create(req.body, function(err, word) {
		if (err) {
			res.send('error saving word');
		} else {
			console.log(word);
			res.send(word);
		}
	})
});

app.put('/api/word/:id', function(req, res) {
	Word.findOneAndUpdate({
		_id: req.params.id
	}, 
	{ $set: { content: req.body.content}},
	{ upsert: true },
	function (err, newWord) {
		if(err) {
			console.log('error occured');
		} else {
			console.log(newWord);
			res.send(newWord);
		}
	});
});


app.delete('/api/word/:id', function(req, res) {
	Word.findOneAndRemove({
		_id: req.params.id
	}, function(err, word){
		if(err) {
			res.send('error deleting');
		} else {
			console.log(word);
			res.status(204);
		}
	});
});

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



module.exports = app;
