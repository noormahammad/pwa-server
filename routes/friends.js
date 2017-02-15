var express = require('express');
var router = express.Router();

var db = require('../db.js');
var User = require('../models/user.model.js');
var Friend = require('../models/friend.model.js');

/* GET home page. */
router.get('/test', function(req, res, next) {
  var friend = new Friend();
  friend.from = '589c260997301c0908f2028d';
  friend.to = '589c2ee397301c0908f2028e';
  friend.save(function (err) {
    if (err) return handleError(err);
    res.send('success');
  });
});

router.get('/find', function(req, res, next) {
	Friend
		.findOne({ confirmed: false })
		.populate('from')
		.exec(function (err, friend) {
		  if (err) return res(err);
		  res.send(friend.from);
		});

});


router.get('/request/:id', function(req, res, next) {
	Friend
		.find({ $and: [
			{confirmed: false}, 
			{to: req.params.id}
			]}
		)
		.populate('from')
		.exec(function (err, friends) {
		  if (err) return res.send(err);
		  var result = [];
		  for (var i = 0; i < friends.length; i++){
		  	result.push(friends[i].from);
		  }
		  res.send(result);
		});
});

//gửi yêu cầu kết bạn

router.post('/create', function(req, res) {
	Friend.create(req.body, function(err, friend) {
		if (err) {
			res.send('error saving word');
		} else {
			res.send(friend);
		}
	});
});


//Chấp nhận là bạn bè
router.get('/agree/:from/:to', function(req, res) {
	Friend.findOneAndUpdate({ $and: [
			{ from: req.params.from }, 
			{ to: req.params.to }
		]}, 
	{ $set: { confirmed: true }},	function (err, friend) {
		if(err) {
			console.log('error occured');
		} else {
			console.log(friend);
			//Thêm bạn vào danh sách
			User.findOne({
				_id: req.params.to
			}, 
			function (err, user) {
				if(err) {
					console.log('error occured');
				} else {
					//Kiểm tra id from có trong danh sách bạn bè chưa
					if (user.list_friend.indexOf(req.params.from) < 0) {
						user.list_friend.push(req.params.from);
						user.save(function(err) {
							if (err){
								res.send(err);
							}
							res.send(user.list_friend);
						})
					}
					res.send(user.list_friend);
				}
			});
		}
	});
});


//hủy kết bạn
router.get('/cancel/:user/:friend', function(req, res) {
	User.findOneAndUpdate({
			_id: req.params.user
		}, 
		{ $pull: { list_friend: req.params.friend } },
		function (err, user) {
			if(err) {
				console.log('error occured');
			} else {
				res.json(user.list_friend);
			}
		})
})

module.exports = router; 
