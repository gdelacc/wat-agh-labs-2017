import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesListComponent }  from './components/notes-list.component';
import { NoteDetailComponent }  from './components/note-detail.component';
import { NoteAddComponent }  from './components/note-add.component';

const appRoutes: Routes = [
 
    {path: '', component: NotesListComponent},
    {path: 'new', component: NoteAddComponent},
    {path: 'note/:id', component: NoteDetailComponent},
    {path: 'note/', component: NoteDetailComponent},
    {path: '**', component: NotesListComponent},
        

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);