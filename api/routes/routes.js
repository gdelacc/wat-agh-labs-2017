'use strict'

var express = require('express');
var NotesController = require('../controllers/notes');
var api = express.Router();


//CRUD Notes
api.get('/notes/', NotesController.getNotes);
api.post('/notes/create', NotesController.createNote);

//CRUD SPECIFIC
api.get('/notes/:id', NotesController.getNote);
api.delete('/notes/:id', NotesController.deleteNote);
api.put('/notes/:id', NotesController.updateNote);



module.exports = api;