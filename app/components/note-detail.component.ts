import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {NoteService} from '../services/note.service';
import {Note} from '../models/note';

@Component({
    selector: 'note-detail',
    templateUrl: 'app/views/note-detail.html',
    providers: [NoteService]
})

export class NoteDetailComponent implements OnInit{ 
   public note : Note;
   public errorMsg;

   constructor(
       private _noteService: NoteService,
       private _route: ActivatedRoute,
       private _router: Router
   ) {}

   ngOnInit() {
     this.getNote();
   }

   getNote() {
       this._route.params.forEach((params: Params) => {
           let id = params['id'];

           this._noteService.getNote(id).subscribe(
               response => {
                /*this.note = {
                    title = 'Hola',
                    note_text = 'Descripcion'
                }*/
                this.note = response.note;
                console.log(response);
                
                if (!this.note) {
                    this._router.navigate(['/']);
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
        }); 
    }
    



}