import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies.component';
import { DetailsComponent } from './components/details.component';

const routes: RouterConfig = [
  { path: '',   component: MoviesComponent},
  { path: 'movie/:id',   component: DetailsComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];
