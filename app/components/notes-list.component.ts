import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {NoteService} from '../services/note.service';
import {Note} from '../models/note';

@Component ({
    selector: 'notes-list',
    templateUrl: 'app/views/notes-list.html',
    providers : [NoteService]
})

export class NotesListComponent implements OnInit{

    public title: string;
    public notes: Note[];
    public errorMsg;


    constructor(
        private _noteService: NoteService
    ) {
        this.title = 'Notes list:';
        

    }

    ngOnInit() {
        console.log('NotesListComponent loaded!');
        this._noteService.getNotes().subscribe(
            result => {
                console.log(result);
                this.notes = result.notes;

                if (!this.notes) {
                    alert('Server Error!!');
                }

            },
            error => {
                this.errorMsg.Message = <any>error;

                if (this.errorMsg != null) {
                    console.log(this.errorMsg);
                    alert('Error on GET request');
                }

            }
        )
    }


}