var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
 	email: String,
 	name: String, 
 	password: String, 
 	list_friend: Array
}, { collection: 'users' });

module.exports = mongoose.model('User', UserSchema);
