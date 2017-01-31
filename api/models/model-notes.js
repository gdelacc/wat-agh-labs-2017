'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = Schema({
    title: String,
    note_text: String
});

module.exports = mongoose.model('Note', NoteSchema);