'use strict';

class Helper {

	constructor() {
		this.db = require('./db.js');
		this.user = require('./models/user.model.js');
		this.friend = require('./models/friend.model.js');
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