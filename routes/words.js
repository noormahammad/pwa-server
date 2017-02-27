var express = require('express');
var router = express.Router();

var Word = require('../models/word.model');

var db = require('../db.js');
// var mongoose = require('mongoose');
// var db = 'mongodb://trang2uet:pwa@ds049631.mlab.com:49631/pwa';

// mongoose.connect(db, function (error) {
//   if (error) {
//       console.log(error);
//   }
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  // use mongoose to get all words in the database
    Word.find(function(err, words) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        res.render('pages/words.ejs', { words: words }); // return all reviews in JSON format
    });

});


router.get('/2', function(req, res, next) {
  res.send('respond with a resource2');
});



// Get all words
router.get('/all', function(req, res) {
	console.log('searching...');
    // use mongoose to get all words in the database
    Word.find(function(err, words) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        res.json(words); // return all reviews in JSON format
    });
});

router.get('/:id', function(req, res) {
	var content = 'kajfdksd'
	Word.findOne({
		_id: req.params.id
	})
	.exec(function(err, word) {
		if(err) {
			res.send('error occured');
		} else {
			console.log(content);
			console.log(word);
			res.json(word);
		}
	})
});

router.post('/', function(req, res) {
	Word.create(req.body, function(err, word) {
		if (err) {
			res.send('error saving word');
		} else {
			console.log(word);
			res.send(word);
		}
	})
});

router.put('/:id', function(req, res) {
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

router.get('/delete/:id', function(req,res) {
	Word.findOneAndRemove({
		_id: req.params.id
	}, function(err, word){
		if(err) {
			res.send('error deleting');
		} else {
			console.log(word);
			res.redirect('/words');
		}
	});
})


// router.delete('/:id', function(req, res) {
// 	Word.findOneAndRemove({
// 		_id: req.params.id
// 	}, function(err, word){
// 		if(err) {
// 			res.send('error deleting');
// 		} else {
// 			console.log(word);

// 			res.status(204);
// 		}
// 	});
// });

module.exports = router;
