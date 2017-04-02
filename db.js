var mongoose = require('mongoose');
var url = 'mongodb://trang2uet:pwa@ds049631.mlab.com:49631/pwa';
var db;

var options = { server: { socketOptions: { keepAlive: 900000, connectTimeoutMS: 90000 } }, 
                replset: { socketOptions: { keepAlive: 900000, connectTimeoutMS : 90000 } } };

mongoose.Promise = global.Promise;
mongoose.connect(url, options, function (error, db) {
  if (error) {
    console.log(error);
  }
});

module.exports = db;
