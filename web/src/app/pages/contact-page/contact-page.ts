import { Component } from '@angular/core';
import { ContactDetails } from '../../components/ContactPage/contact-details/contact-details';
import { CtaCareerCard } from '../../components/cta-career-card/cta-career-card';

@Component({
  selector: 'app-contact-page',
  imports: [ContactDetails, CtaCareerCard],
  template: `
    <contact-details />
    <cta-career-card />
  `,
})
export class ContactPage {}
