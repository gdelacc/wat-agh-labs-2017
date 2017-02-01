"use strict";
var router_1 = require("@angular/router");
var notes_list_component_1 = require("./components/notes-list.component");
var note_detail_component_1 = require("./components/note-detail.component");
var note_add_component_1 = require("./components/note-add.component");
var appRoutes = [
    { path: '', component: notes_list_component_1.NotesListComponent },
    { path: 'new', component: note_add_component_1.NoteAddComponent },
    { path: 'note/:id', component: note_detail_component_1.NoteDetailComponent },
    { path: 'note/', component: note_detail_component_1.NoteDetailComponent },
    { path: '**', component: notes_list_component_1.NotesListComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map