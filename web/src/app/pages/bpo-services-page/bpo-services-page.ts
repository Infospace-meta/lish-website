import { Component } from '@angular/core';
import { BpoServicesComponent } from '../../components/bpo-services/bpo-services.component';

@Component({
  selector: 'app-bpo-services-page',
  imports: [BpoServicesComponent],
  template: `<bpo-services />`,
})
export class BpoServicesPage {}
