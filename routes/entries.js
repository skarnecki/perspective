var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Entry = require('../models/Entry');

router.get('/', function(req, res, next) {
  Entry.find(function (err, entries) {
    if (err) return next(err);
    res.json(entries);
  });
});

router.post('/', function(req, res, next) {
  Entry.create(req.body, function (err, entry) {
    if (err) return next(err);
    res.json(entry);
  });
});

router.get('/:id', function(req, res, next) {
  Entry.findById(req.params.id, function (err, entry) {
    if (err) return next(err);
    res.json(entry);
  });
});



module.exports = router;
