var express = require('express');
var router = express.Router();

var User = require('../models/user.model.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(err, users) {
        if (err)
            res.send(err)
        res.render('pages/user.ejs', { users: users });
    });
});

// Get all users
router.get('/all', function(req, res) {
    User.find(function(err, users) {
        if (err)
            res.send(err)
        res.json(users);
    });
});


//Create new user
router.post('/create', function(req, res) {
	User.create(req.body, function(err, user) {
		if (err) {
			res.send('error saving word');
		} else {
			res.send(user);
		}
	});
});


//update information of user if user is not exist, create new user
router.post('/edit/:email/:method', function(req, res) {
	User.findOneAndUpdate({
		email: req.params.email,
		method: req.params.method
	},
	{ $set: {
		name: req.body.name,
		imageUrl: req.body.imageUrl
	}}, { upsert: true, new: true },
	function (err, user) {
		if(err) {
			res.send(err);
		} else {
			res.send(user);
		}
	});
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
			res.json(null);
		} else {
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

module.exports = router;
