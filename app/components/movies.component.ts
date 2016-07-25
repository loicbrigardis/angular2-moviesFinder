import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../services/moviedb.service';


@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html',
    providers: [MoviedbService]
})
export class MoviesComponent implements OnInit {

    moviesPopular: Array<Object>;
    moviesInTheatres: Array<Object>;

    constructor(private _moviedbService: MoviedbService) { }

    ngOnInit() {
        this._moviedbService.getPopularMovies()
            .subscribe(data => this.moviesPopular = data.results);

        this._moviedbService.getMoviesInTheatres()
            .subscribe(data => this.moviesInTheatres = data.results);
    }


}