var express = require('express');
var router = express.Router();

var db = require('../db.js');
var User = require('../models/user.model.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(err, users) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        res.render('pages/user.ejs', { users: users }); // return all reviews in JSON format
    });
});

// Get all words
router.get('/all', function(req, res) {
	console.log('searching...');
    // use mongoose to get all words in the database
    User.find(function(err, users) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        res.json(users); // return all reviews in JSON format
    });
});

router.post('/api/create', function(req, res) {
	User.create(req.body, function(err, user) {
		if (err) {
			res.send('error saving word');
		} else {
			console.log(user);
			res.send(user);
		}
	})
});

router.get('/api/:email', function(req, res) {
	User.findOne({
		email: req.params.email
	})
	.exec(function(err, user) {
		if(err) {
			console.log('not found');
			res.json(null);
		} else {
			console.log(user);
			res.json(user);
		}
	})
})


router.get('/api/friend/:id', function(req, res) {
	User.findOne({
		_id: req.params.id
	})
	.exec(function(err, user) {
		if(err) {
			res.send('error occured');
		} else {
			// var list = [];
			// for (var i = 0; i < user.list_friend.length; i++) {
			// 	User.findOne({
			// 		_id: user.list_friend[i]
			// 	})
			// 	.exec(function(err, user) {
			// 		if(err) {
			// 			res.send(err);
			// 		} else {
			// 			list.push(user);
			// 			if (i == user.list_friend.length - 1) res.json(list);
			// 		}
			// 	})

			// }
			res.send(user.list_friend);
		}
	})
})


router.get('/api/delete/:id', function(req, res) {
	User.findOneAndRemove({
		_id: req.params.id
	}, function(err, user){
		if(err) {
			res.send('error deleting');
		} else {
			res.redirect('/users');
		}
	});
})
module.exports = router;
