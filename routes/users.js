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


//edit information of user
router.post('/edit/:email', function(req, res) {
	User.findOneAndUpdate({
		email: req.params.email
	},
	req.body, {new: true},
	function (err, user) {
		if(err) {
			console.log('error occured');
		} else {
			res.send(user);
		}
	});
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
});


//find users has email container input
router.get('/search/:input', function(req, res) {
	User.find({ $or: [{
		email: new RegExp(req.params.input, "i")
	},
	{
		name: new RegExp(req.params.input, "i")
	} ]})
	.exec(function(err, users) {
		if(err) {
			console.log('not found');
			res.json(null);
		} else {
			console.log(users);
			res.json(users);
		}
	})
});


router.get('/api/friend/:id', function(req, res) {
	User.findOne({
		_id: req.params.id
	})
	.populate('list_friend')
	.exec(function(err, user) {
		if(err) {
			res.send('error occured');
		} else {
			console.log('friend'+ user.list_friend);
			res.send(user.list_friend);
		}
	})
})


router.get('/findfriend/:email', function(req, res) {
	User.findOne({
		email: req.params.email
	})
	.populate('list_friend')
	.exec(function(err, user) {
		if(err) {
			res.send('error occured');
		} else {
			res.send(user['list_friend']);
		}
	})
});


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
});

router.get('/api/addfriend/test', function(req, res) {
	User.findOne({
		email: 'killalltolive@gmail.com'
	})
	.exec(function(err, user) {
		if(err) {
			console.log('not found');
			res.json(null);
		} else {
			//res.json(user);
		
			User.findOneAndUpdate({
				email: 'trangjtwya@gmail.com'
			}, 
			{ $push: { list_friend: user._id}},
			function (err, newUser) {
				if(err) {
					console.log('error occured');
				} else {
					//console.log(newWord);
					res.send(newUser);
				}
			});
		}
	})
		
})
module.exports = router;
