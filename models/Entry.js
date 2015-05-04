var mongoose = require('mongoose');
var validators = require('mongoose-validators');

var EntrySchema = new mongoose.Schema({
    url: { type: String, required: true, validate: validators.isURL({'require_protocol': true, 'allow_underscores': true}) },
    title: {type: String, required: true},
    user: { type: String, required: true },
    time: { type: Number, required: true, min: 1 },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', EntrySchema);
