import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'wrapper',
  imports: [ RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class WrapperComponent {}
