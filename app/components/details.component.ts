import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviedbService } from '../services/moviedb.service';

@Component({
    moduleId: module.id,
    selector: 'movie-detail',
    templateUrl: 'details.component.html',
    providers: [MoviedbService]
})
export class DetailsComponent implements OnInit {
    private id: number;
    private movieDetail: Object;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _moviedbService: MoviedbService) { }

    ngOnInit() { 
        this._route.params.subscribe(params => {
            this.id = params['id'];
        });
        
        this._moviedbService.getMovie(this.id)
            .subscribe(data => this.movieDetail = data);
    }

    onClickBackBtn() {
         this._router.navigate(['']);
    }

}