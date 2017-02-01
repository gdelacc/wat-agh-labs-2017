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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var NoteService = (function () {
    function NoteService(_http) {
        this._http = _http;
        this.url = 'http://localhost:3001/api/';
    }
    NoteService.prototype.getNotes = function () {
        return this._http.get(this.url + 'notes/')
            .map(function (res) { return res.json(); });
    };
    NoteService.prototype.getNote = function (id) {
        return this._http.get(this.url + 'notes/' + id)
            .map(function (res) { return res.json(); });
    };
    NoteService.prototype.addNote = function (note) {
        var json = JSON.stringify(note);
        var params = json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'notes/create', params, { headers: headers });
    };
    return NoteService;
}());
NoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map