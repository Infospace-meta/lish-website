/**BOOTSTRAP WITH platformBrowserDynamic()
 * WORKS WITH APP MODULE
 * Also the App.ts component has to be marked [standalone: false]
 * Ensure BrowserModule is imported in app.module
 */
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/**DEFAULT CODE THAT BOOTSTRAPS WITH
 * bootstrapApplication(AppComponent, appConfig)
 * WORKS WITH APPCONFIG FILE
 * Also the App.ts component has to be marked [standalone: true,]
 */
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, appConfig).catch((err) => console.error(err));
