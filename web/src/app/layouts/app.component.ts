import { Component, OnInit } from '@angular/core';
import { AppHeader } from '../components/app-header/app-header';
import { RouterOutlet } from '@angular/router';
import { AppFooter } from '../components/app-footer/app-footer';

@Component({
  selector: 'app-layout',
  imports: [AppHeader, RouterOutlet, AppFooter],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class AppLayoutComponent {}
