var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Entry = require('../models/Entry');

router.get('/:id', function(req, res, next) {
  Entry.find({"user": req.params.id}, function (err, entries) {
    if (err) return next(err);
    res.render('entries', { entries: entries, userId: req.params.id});
  });
});



module.exports = router;
