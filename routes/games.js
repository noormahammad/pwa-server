var express = require('express');
var router = express.Router();

var Game = require('../models/game.model.js');

router.post('/create', function(req, res, next) {
	Game.create(req.body, function(err, newGame) {
		if (err) {
			res.send(err);
		} else {
			console.log('game');
			res.send(newGame);
		}
	});
});

router.post('/update/:id', function(req, res, next) {
	Game.findOneAndUpdate({
		_id: req.params.id
	}, 
	{ $set: { 
		'played': true,
		'toAns': req.body.toAns,
		'to.score': req.body.to.score
			}
	},
	function (err, game) {
		if(err) {
			console.log('error occured');
		} else {
			res.send(game);
		}
	});
});

router.get('/request/:id', function(req, res, next) {
	Game.find({ $and: [{
		'to.id': req.params.id
	}, {
		'played': false
	}] })
	.populate('from.id')
	.populate('to.id')
	.exec( function(err, games) {
		if (err) {
			res.send(err);
		} else {
			res.send(games);
		}
	});
});

router.post('/delete/:id', function(req, res, next) {
	Game.findOneAndRemove({
		_id: req.params.id
	}, function(err, game){
		if(err) {
			res.send(err);
		} else {
			res.send(game);
		}
	});
})

module.exports = router;
