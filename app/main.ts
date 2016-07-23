import { bootstrap }    from '@angular/platform-browser-dynamic';
import { JSONP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';


bootstrap(AppComponent, [JSONP_PROVIDERS]);
