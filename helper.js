'use strict';
const mather = require('./mather.js');
class Helper {

	constructor() {
		this.db = require('./db.js');
		this.user = require('./models/user.model.js');
		this.friend = require('./models/friend.model.js');
		this.word = require('./models/word.model.js');
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
      //console.log(content[0]);
      callback(err, content);
      
    });

	}

	toStringTest() {
		return 'toString';
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



  

}
module.exports = new Helper();