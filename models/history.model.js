var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('../models/user.model.js');

var HistorySchema = new Schema({
	player1: {
		id: { type: String, ref:'User' },
		win: { type: Number, default: 0 }
	},
		player2: {
		id: { type: String, ref:'User' },
		win: { type: Number, default: 0 }
	},
	created: { type: Date, default: Date.now }
 
}, { collection: 'history' });

module.exports = mongoose.model('history', HistorySchema);
