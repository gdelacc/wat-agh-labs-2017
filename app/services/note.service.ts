import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Note} from '../models/note';


@Injectable()
export class NoteService{
    public url: string;

    constructor(private _http: Http) {
        this.url = 'http://localhost:3001/api/';
    }

    getNotes() {
        return this._http.get(this.url+'notes/')
                         .map(res => res.json());
    }
}