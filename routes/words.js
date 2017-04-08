var express = require('express');
var router = express.Router();

var Word = require('../models/word.model');
var Topic = require('../models/topic.model');
var Section = require('../models/section.model');


var db = require('../db.js');

router.get('/', function(req, res, next) {
  Word.find(function(err, words) {
      if (err)
          res.send(err)
      res.render('pages/words.ejs', { words: words }); 
  });
});

router.get('/topic', function(req, res) {
  Topic.find(function(err, topics) {
      if (err)
          res.send(err)
      res.json(topics); 
  });
});

router.get('/topic/:id', function(req, res) {
  Section.find({
    topic_id: req.params.id
  })
  .exec(function(err, sections) {
    if(err) {
      res.send(err);
    } else {
      res.json(sections);
    }
  });
});

router.get('/section/info/:topicId/:sectionId', function(req, res) {
  Section.findOne({
    id: req.params.sectionId,
    topic_id: req.params.topicId
  })
  .exec(function(err, section) {
    if(err) {
      res.send(err);
    } else {
      res.json(section);
    }
  })
});

router.get('/topic/info/:id', function(req, res) {
  Topic.findOne({
    id: req.params.id
  })
  .exec(function(err, topic) {
    if(err) {
      res.send(err);
    } else {
      res.json(topic);
    }
  })
});

router.get('/all', function(req, res) {
  Word.find(function(err, words) {
      if (err)
          res.send(err)
      res.json(words); 
  });
});

router.get('/section/:sectionId', function(req, res) {
  Word.find({
    book_id: req.params.sectionId
  })
  .exec(function(err, words) {
    if(err) {
      res.send(err);
    } else {
      res.json(words);
    }
  })
});

router.get('/:id', function(req, res) {
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
