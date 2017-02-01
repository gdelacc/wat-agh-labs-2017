"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var note_service_1 = require("../services/note.service");
var NotesListComponent = (function () {
    function NotesListComponent(_noteService) {
        this._noteService = _noteService;
        this.title = 'Notes list:';
    }
    NotesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('NotesListComponent loaded!');
        this._noteService.getNotes().subscribe(function (result) {
            console.log(result);
            _this.notes = result.notes;
            if (!_this.notes) {
                alert('Server Error!!');
            }
        }, function (error) {
            _this.errorMsg.Message = error;
            if (_this.errorMsg != null) {
                console.log(_this.errorMsg);
                alert('Error on GET request');
            }
        });
    };
    return NotesListComponent;
}());
NotesListComponent = __decorate([
    core_1.Component({
        selector: 'notes-list',
        templateUrl: 'app/views/notes-list.html',
        providers: [note_service_1.NoteService]
    }),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NotesListComponent);
exports.NotesListComponent = NotesListComponent;
//# sourceMappingURL=notes-list.component.js.map