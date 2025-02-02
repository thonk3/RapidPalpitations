import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';

import { AppModule } from './app/app.module';
import { routeConfig } from './app/routes';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
