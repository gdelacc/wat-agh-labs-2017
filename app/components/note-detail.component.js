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
var NoteDetailComponent = (function () {
    function NoteDetailComponent(_noteService, _route, _router) {
        this._noteService = _noteService;
        this._route = _route;
        this._router = _router;
    }
    NoteDetailComponent.prototype.ngOnInit = function () {
        this.getNote();
    };
    NoteDetailComponent.prototype.getNote = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._noteService.getNote(id).subscribe(function (response) {
                /*this.note = {
                    title = 'Hola',
                    note_text = 'Descripcion'
                }*/
                _this.note = response.note;
                console.log(response);
                if (!_this.note) {
                    _this._router.navigate(['/']);
                }
            }, function (error) {
                _this.errorMsg.Message = error;
                if (_this.errorMsg != null) {
                    console.log(_this.errorMsg);
                    alert('Error on GET request');
                }
            });
        });
    };
    return NoteDetailComponent;
}());
NoteDetailComponent = __decorate([
    core_1.Component({
        selector: 'note-detail',
        templateUrl: 'app/views/note-detail.html',
        providers: [note_service_1.NoteService]
    }),
    __metadata("design:paramtypes", [note_service_1.NoteService,
        router_1.ActivatedRoute,
        router_1.Router])
], NoteDetailComponent);
exports.NoteDetailComponent = NoteDetailComponent;
//# sourceMappingURL=note-detail.component.js.map