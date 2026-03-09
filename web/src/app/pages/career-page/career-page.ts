import { Component } from '@angular/core';
import { ContactDetails } from '../../components/ContactPage/contact-details/contact-details';

@Component({
  selector: 'career-page',
  imports: [ContactDetails],
  template: ` <contact-details /> `,
})
export class CareerPage {}
