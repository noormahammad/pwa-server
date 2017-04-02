var express = require('express');
var router = express.Router();

var Word = require('../models/word.model');

var db = require('../db.js');

router.get('/', function(req, res, next) {
  Word.find(function(err, words) {
      if (err)
          res.send(err)
      res.render('pages/words.ejs', { words: words }); 
  });

});


router.get('/all', function(req, res) {
  Word.find(function(err, words) {
      if (err)
          res.send(err)
      res.json(words); 
  });
});

router.get('/:id', function(req, res) {
  var content = 'kajfdksd'
  Word.findOne({
    _id: req.params.id
  })
  .exec(function(err, word) {
    if(err) {
      res.send('error occured');
    } else {
      res.json(word);
    }
  })
});

router.post('/', function(req, res) {
  Word.create(req.body, function(err, word) {
    if (err) {
      res.send('error saving word');
    } else {
      res.send(word);
    }
  })
});

router.put('/:id', function(req, res) {
  Word.findOneAndUpdate({
    _id: req.params.id
  }, 
  { $set: { content: req.body.content}},
  { upsert: true },
  function (err, newWord) {
    if(err) {
      console.log('error occured');
    } else {
      console.log(newWord);
      res.send(newWord);
    }
  });
});

router.get('/delete/:id', function(req,res) {
  Word.findOneAndRemove({
    _id: req.params.id
  }, function(err, word){
    if(err) {
      res.send('error deleting');
    } else {
      console.log(word);
      res.redirect('/words');
    }
  });
});

module.exports = router;
