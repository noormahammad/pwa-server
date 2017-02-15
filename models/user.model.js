var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
 	email: String,
 	name: String, 
 	password: String, 
 	imageUrl: String,
 	list_friend: [{ type: String, ref: 'User' }]
}, { collection: 'users' });

module.exports = mongoose.model('User', UserSchema);
