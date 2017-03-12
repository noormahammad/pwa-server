var express = require('express');
var router = express.Router();

var Game = require('../models/game.model.js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Games');
});

router.post('/create', function(req, res, next) {
	Game.create(req.body, function(err, newGame) {
		if (err) {
			res.send(err);
		} else {
			res.send(newGame);
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