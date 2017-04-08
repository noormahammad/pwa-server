var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SectionSchema = new Schema({
  id: String,
  name: String,
  cover: String,
  description: String
}, { collection: 'sections' });

module.exports = mongoose.model('Section', SectionSchema);