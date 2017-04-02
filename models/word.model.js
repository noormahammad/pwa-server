var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WordSchema = new Schema({
  id: String,
  content: String,
  meaning: String,
  sound_us: String,
  sound_uk: String
}, { collection: 'words' });

module.exports = mongoose.model('Word', WordSchema);
