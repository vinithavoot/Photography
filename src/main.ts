import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


const config = {
  providers: [
    provideRouter(routes),      // Providing routing
          // Providing HttpClient if you need HTTP services
    // Add other providers here if necessary
  ]
};

// Bootstrap the application with the config
bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));
