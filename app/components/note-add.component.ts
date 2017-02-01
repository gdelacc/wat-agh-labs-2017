import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {NoteService} from '../services/note.service';
import {Note} from '../models/note';

@Component({
    selector: 'note-add',
    templateUrl: 'app/views/note-add.html',
    providers: [NoteService]
})

export class NoteAddComponent implements OnInit{ 
    public note : Note;
    public errorMsg;s

   constructor(
       private _noteService: NoteService,
       private _route: ActivatedRoute,
       private _router: Router

   ) {}

   ngOnInit() {
       this.note = new Note('','');
       console.log(this.note);
   }
  
   public onSubmit() {
       console.log(this.note);

       this._noteService.addNote(this.note).subscribe(
           response => {

           },
           error => {
                    this.errorMsg.Message = <any>error;

                    if (this.errorMsg != null) {
                        console.log(this.errorMsg);
                        alert('Error on GET request');
                    }
            }
       );
   }

}