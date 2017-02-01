import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent }  from './app.component';
import { NotesListComponent }  from './components/notes-list.component';
import { NoteDetailComponent }  from './components/note-detail.component';
import { NoteAddComponent }  from './components/note-add.component';
 
@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  
  ],
  declarations: [
      AppComponent,
      NotesListComponent,
      NoteDetailComponent,
      NoteAddComponent
   ],
  providers: [
      appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule {}