import {
  ApplicationConfig,
//   importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  //   provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
// import { todoReducer } from './state/todos/todo.reducers';
// import { TodoEffects } from './state/todos/todo.effects';
// import { IonicStorageModule, provideStorage } from '@ionic/storage-angular';
// import { Drivers } from '@ionic/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),    
    provideRouter(routes),
    // provideStore({ todoState: todoReducer }),
    // provideEffects([TodoEffects]),
    // importProvidersFrom(
    //   IonicStorageModule.forRoot({
    //     name: '__mydb',
    //     driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    //   })
    // ),
  ],
};
