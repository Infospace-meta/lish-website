import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [provideHttpClient(withInterceptors([authTokenInterceptor]))],
  bootstrap: [App],
})
export class AppModule {}
