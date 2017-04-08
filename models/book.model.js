var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  id: String,
  name: String,
  cover: String,
  description: String
}, { collection: 'books' });

module.exports = mongoose.model('Book', BookSchema);
