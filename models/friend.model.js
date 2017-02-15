var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('../models/user.model.js');

var FriendSchema = new Schema({
 	from: { type:  String, ref:'User' },
  to:   { type: String, ref:'User' },
  confirmed	: { type: Boolean, default: false },
	created		: { type: Date, default: Date.now }
}, { collection: 'friends' });

module.exports = mongoose.model('friend', FriendSchema);
