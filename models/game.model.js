var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('../models/user.model.js');

var GameSchema = new Schema({
 	from: { type:  String, ref:'User' },
  to:   { type: String, ref:'User' },
  played	: { type: Boolean, default: false },
  content: {type: Array},
  type: String,
	created		: { type: Date, default: Date.now }
}, { collection: 'games' });

module.exports = mongoose.model('game', GameSchema);
