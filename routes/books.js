var express = require('express');
var router = express.Router();

var Book = require('../models/book.model');

var db = require('../db.js');

router.get('/', function(req, res) {
  Book.find(function(err, books) {
    if (err)
      res.send(err)
    res.json(books); 
  });
});

router.get('/:id', function(req, res) {
 	Book.findOne({
    id: req.params.id
  })
  .exec(function(err, book) {
    if(err) {
      res.send(err);
    } else {
      res.json(book);
    }
  })
});

module.exports = router;
