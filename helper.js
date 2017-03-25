'use strict';
const mather = require('./mather.js');
class Helper {

	constructor() {
		this.db = require('./db.js');
		this.user = require('./models/user.model.js');
		this.friend = require('./models/friend.model.js');
		this.word = require('./models/word.model.js');
		this.game = require('./models/game.model.js');
	}

	getContentGame(numQues, callback) {
		this.word.find(function(err, allWords) {
      var content = [];
      var typeGames = ['reading'];
      
      var words = mather.getRandomArrayElements(allWords, numQues);
      let numOfAns = 4;
      let question = {};

      for (var i = 0; i < words.length; i++) {
      	let j = mather.random(typeGames.length);
      	let question = {};
      	question.word = words[i];
      	question.type = typeGames[j];
      	if(question.type == 'reading') {
      		question['choices'] = mather.getChoices(allWords, words[i], numOfAns);
      	}
      	content.push(question);
      }
      callback(err, content);
      
    });
	}

	getUser(userId, callback) {
		this.user.findOne({
			_id: userId
		})
		.populate('list_friend')
		.exec(function(err, user) {
			callback(err, user);
		});
	}

 /* 
  * Method to get sum of online user
  */
	getSumOnline(callback) {
		this.user.count({
			online: true,
		}, function(err, count) {
			callback(err, count);
		});
	}

	getRandomUser(userId, callback) {
		this.user.find({
			online: true,
		})
		.exec(function(err, users) {
			if (users.length > 0 ) {
				for (let i = 0; i < users.length; i++) {
					if (users[i]['_id'] == userId) {
						users.splice(i, 1);
						break;
					}
				}
				if(users.length >= 1) {
					let random = mather.random(users.length);
					callback(err, users[random]);
				}
				else {
					callback(err, null);
				}	
			}else {
				callback(err, null)
			}			
		});
	}

	addSocketId(userId, socketId, callback) {
		this.user.findOneAndUpdate({
			_id: userId
		},
		{ 
			$set: { 
			'socketId': socketId,
			}
		}, {new: true},
		function (err, user) {
			callback(err, user);
		});
	}

	changeOnApp(userId, status, callback) {
		this.user.findOneAndUpdate({
			_id: userId
		},
		{ 
			$set: { 
			'onApp': status,
			}
		}, {new: true},
		function (err, user) {
			callback(err, user);
		});
	}

	changeStatus(userId, status, callback) {
		this.user.findOneAndUpdate({
			_id: userId
		},
		{ 
			$set: { 
			'online': status,
			}
		}, {new: true},
		function (err, user) {
			callback(err, user);
		});
	}

	getListFriend(userId, callback) {
		this.user.findOne({
			_id: userId
		})
		.populate('list_friend')
		.exec(function(err, user) {
			callback(err, user.list_friend);
		});
	}

	getHistory(userId, callback) {
		this.game.find({ $and: [{
			'to.id': userId
		}, {
			'played': true
		}] })
		.populate('from.id')
		.exec( function(err, games) {
			let result = mather.countInArray(games);
			callback(err, result);
		});
	//aggrerate
	}

	createFriend(data, callback) {
		this.user.findOne({
			_id: data['from']
		})
		.exec((err, user) => {
			if (user.list_friend.indexOf(data['to']) < 0) {
				this.friend.create(data, function(err, friend) {
					callback(err, friend);
				});
			}else {
				callback(err, null);
			}
		});
	}

	/* 
  * Method to unfriend
  */
	unfriend(fromId, toId, callback) {
		this.user.findOneAndUpdate({
			_id: fromId
		}, 
		{ $pull: { list_friend: toId } },
		(err, userX) => {
			if(err) {
				console.log('error occured');
			} else {
				this.user.findOneAndUpdate({
					_id: toId
				}, 
				{ $pull: { list_friend: fromId } },
				function (err, friend) {
					//xóa thành công
					callback(err, true);
				});		
			}
		});
	}


 /* 
  * Method to get friendship request
  */
  getFriendshipRequest(userId, callback) {
		this.friend.find(
			{ 
				$and: [
				{
					confirmed: false
				}, {
					to: userId
				}]
			})
			.populate('from')
			.exec(function (err, friends) {
			  var result = [];
			  for (var i = 0; i < friends.length; i++){
			  	result.push(friends[i].from);
			  }
			 	callback(err, result);
			});
	}

	/* 
  * Method to search user by email or name
  */
  searchUser(input, callback) {
  	this.user.find({ $or: [{
			email: new RegExp(input, "i")
		},
		{
			name: new RegExp(input, "i")
		} ]})
		.exec((err, users) => {
			callback(err, users);
		});
  }

	// /*
	//  * Method to accept request friend, have a new friend
	//  */

	// acceptRequest(fromId, toId, callback) {
	// 	this.friend.findOneAndUpdate({ $and: [
	// 		{ from: fromId }, 
	// 		{ to: toId }
	// 	]}, 
	// 	{ $set: { confirmed: true }},(err, friend) => {
	// 		//Thêm bạn vào danh sách bạn bè của to và from
	// 		this.user.findOne({
	// 			_id: toId
	// 		}, (err, user) => {
	// 				if (user.list_friend.indexOf(fromId) < 0) {
	// 					user.list_friend.push(fromId);
	// 					user.save(function(err) {});
	// 				}
	// 			}
	// 		});

	// 		this.user.findOne({
	// 			_id: fromId
	// 		}, (err, user) => {
	// 			if (user.list_friend.indexOf(toId) < 0) {
	// 				user.list_friend.push(toId);
	// 				user.save(function(err) {});
	// 			}
	// 		});
	// });
	// }

	/* 
  * Method to accpet friend
  */
	acceptRequest(fromId, toId, callback) {
		this.friend.findOneAndUpdate({ $and: [
			{ from: fromId }, 
			{ to: toId }
		]}, 
		{ $set: { confirmed: true }},	(err, friend) => {

			this.user.findOneAndUpdate({
				_id: fromId
			}, 
			{ $push: { list_friend: toId } },
			(err, userX) => {
				if(err) {
					console.log('error occured');
				} else {
					this.user.findOneAndUpdate({
						_id: toId
					}, 
					{ $push: { list_friend: fromId } },
					function (err, friendY) {
						//xóa thành công
						callback(err, true);
					});		
				}
			});

		});
	}
}
module.exports = new Helper();
