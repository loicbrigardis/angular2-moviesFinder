import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { MoviedbService } from '../services/moviedb.service';

@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html',
    providers: [MoviedbService],
    directives: [ROUTER_DIRECTIVES]
})
export class MoviesComponent implements OnInit {

    moviesPopular: Array<Object>;
    moviesInTheatres: Array<Object>;

    constructor(
        private _router: Router,
        private _moviedbService: MoviedbService) { }

    ngOnInit() {
        this._moviedbService.getPopularMovies()
            .subscribe(data => this.moviesPopular = data.results);

        this._moviedbService.getMoviesInTheatres()
            .subscribe(data => this.moviesInTheatres = data.results);
    }

    onClickDetail (movie:Object) {
        let movieId = movie['id'];
        this._router.navigate(['movie', movieId]);
    }


}