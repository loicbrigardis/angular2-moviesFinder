import { Component, OnInit } from '@angular/core';
import { Control, FORM_DIRECTIVES } from '@angular/common';

import { MoviesComponent } from './components/movies.component';
import { MoviedbService } from './services/moviedb.service';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [MoviesComponent, FORM_DIRECTIVES],
    providers: [MoviedbService]

})

export class AppComponent implements OnInit {
    searchBox = new Control();
    moviesSearched: Array<Object>;

    constructor(
        private _moviedbService: MoviedbService) { }

    ngOnInit() {
        this.searchBox.valueChanges
        .debounceTime(600)
        .distinctUntilChanged()
        .flatMap(searchStr => this._moviedbService.getSearchMovie(searchStr))
        .subscribe(data => this.moviesSearched = data.results)
    }
}
