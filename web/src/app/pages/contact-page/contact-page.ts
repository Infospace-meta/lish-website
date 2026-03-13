import { Component } from '@angular/core';
import { ContactDetails } from '../../components/contact-details/contact-details';
import { CtaPartnerCard } from '../../components/cta-partner-card/cta-partner-card';

@Component({
  selector: 'app-contact-page',
  imports: [ContactDetails, CtaPartnerCard],
  template: `
    <contact-details />
    <cta-partner-card />
  `,
})
export class ContactPage {}
