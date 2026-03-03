import { Component } from '@angular/core';
import { TechLanding } from '../../../components/tech-landing/tech-landing.component';

@Component({
  selector: 'app-tech-landing-page',
  imports: [TechLanding],
  template: ` <app-tech-landing /> `,
})
export class TechLandingPage {}
