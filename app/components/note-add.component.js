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
var router_1 = require("@angular/router");
var note_service_1 = require("../services/note.service");
var note_1 = require("../models/note");
var NoteAddComponent = (function () {
    function NoteAddComponent(_noteService, _route, _router) {
        this._noteService = _noteService;
        this._route = _route;
        this._router = _router;
    }
    NoteAddComponent.prototype.ngOnInit = function () {
        this.note = new note_1.Note('', '');
        console.log(this.note);
    };
    NoteAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.note);
        this._noteService.addNote(this.note).subscribe(function (response) {
            console.log(response);
            _this._router.navigate(['/']);
        }, function (error) {
            _this.errorMsg.Message = error;
            if (_this.errorMsg != null) {
                console.log(_this.errorMsg);
                alert('Error on GET request');
            }
        });
    };
    return NoteAddComponent;
}());
NoteAddComponent = __decorate([
    core_1.Component({
        selector: 'note-add',
        templateUrl: 'app/views/note-add.html',
        providers: [note_service_1.NoteService]
    }),
    __metadata("design:paramtypes", [note_service_1.NoteService,
        router_1.ActivatedRoute,
        router_1.Router])
], NoteAddComponent);
exports.NoteAddComponent = NoteAddComponent;
//# sourceMappingURL=note-add.component.js.map