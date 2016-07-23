import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviedbService {
    private apiKey: string = '06f68c5192f3ff1b2376ea67bf0d044b';

    constructor(private _jsonp: Jsonp) { }

    public getPopularMovies() {
        return this._jsonp.get('http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&callback=JSONP_CALLBACK&api_key=' + this.apiKey)
            .map(res => res.json());
    }

}

