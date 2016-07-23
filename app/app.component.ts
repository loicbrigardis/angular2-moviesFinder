import { Component } from '@angular/core';

import { MoviesComponent } from './components/movies.component';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [MoviesComponent]
    
})
export class AppComponent { }
