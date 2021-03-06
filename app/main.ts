import { bootstrap }    from '@angular/platform-browser-dynamic';
import { JSONP_PROVIDERS, HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
    ...JSONP_PROVIDERS, 
    ...appRouterProviders, 
    ...HTTP_PROVIDERS])
    .catch(err => console.error(err));
