var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
  id: String,
  name: String,
  cover: String,
  description: String
}, { collection: 'topics' });

module.exports = mongoose.model('Topic', TopicSchema);
