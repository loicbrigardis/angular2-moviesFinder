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

    public getMoviesInTheatres() {
        return this._jsonp.get('http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2016-07-20&primary_release_date.lte=2016-07-27&callback=JSONP_CALLBACK&api_key=' + this.apiKey)
            .map(res => res.json());
    }

    getSearchMovie(searchStr: any) {
        if (searchStr) {
            return this._jsonp.get('http://api.themoviedb.org/3/search/movie?query=' + searchStr + '&callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey)
                .map(res => res.json());
        } else {
            return <any>[{}];
        }
    }

    public getMovie(id: number) {
        return this._jsonp.get('http://api.themoviedb.org/3/movie/' + id + '?&callback=JSONP_CALLBACK&api_key=' + this.apiKey)
            .map(res => res.json());
    }

}

