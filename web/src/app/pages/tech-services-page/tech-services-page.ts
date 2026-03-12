import { Component } from '@angular/core';
import { TechServicesComponent } from '../../components/tech-services/tech-services.component';

@Component({
  selector: 'app-tech-services-page',
  imports: [TechServicesComponent],
  template: `<tech-services />`,
})
export class TechServicesPage {}
