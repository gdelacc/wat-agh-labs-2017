'use strict'

var Note = require('../models/model-notes');


//Create a note
function createNote(req, res) {
    var params = req.body;
    var note = new Note();

    note.title =  params.title;
    note.note_text =  params.note_text;

    note.save((err, noteCreated) =>{
        if (err) {
            res.status(500).send({status:"Error during note creation"});
        }
        
        res.status(200).send({note:noteCreated});
    });
}

//GET all notes
function getNotes(req, res) {
    Note.find({}).sort('-title').exec((err,notes)=>{
        if (err){
            res.status(500).send({status:"Error fetching notes"});
        }else{
            if (!notes){
                res.status(404).send({status:"No notes found"});
            }else{
                res.status(200).send({notes});
            }
        } 
    });
}


//GET certain note
function getNote(req, res) {
    var noteId = req.params.id;
    
    Note.findById(noteId,  (err, note) => {
        if (err) {
            res.status(500).send({status:"Error fetching the note"});
        }else {
            if (!note) {
                res.status(404).send({status:"Note not found!"});   
             }else{
                res.status(200).send({note});
            }
        }
        

        
    });
     
   
}

//Update a note
function updateNote(req, res) {
    var noteId = req.params.id;
    var updates = req.body;

    Note.findByIdAndUpdate(noteId, updates, (err, noteUpdated) => {
        if (err) {
            res.status(500).send({status:"Error updating the note"});
        }else{
            res.status(200).send({note: noteUpdated});
        }
        
    });

}

//Delete a note
function deleteNote(req, res) {
    var noteId = req.params.id;

    Note.findById(noteId,  (err, note) => {
        if (err) {
         res.status(500).send({status:"Error fetching the note"});
        }
        if (!note) {
         res.status(404).send({status:"Note not found!"});   
        }else{
            note.remove(err => {
                if (err){
                    res.status(500).send({status:"Error deleting the note"});
                }else{
                    res.status(200).send({status:"Note deleted!"});   
                }
            })
        }
    });
}

module.exports = {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}