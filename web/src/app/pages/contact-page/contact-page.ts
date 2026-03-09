import { Component } from '@angular/core';
import { ContactDetails } from '../../components/ContactPage/contact-details/contact-details';
import { CtaCareerCard } from '../../components/cta-career-card/cta-career-card';
import { PartnerTestimonials } from "../../components/ImpactPage/partner-testimonials/partner-testimonials";

@Component({
  selector: 'app-contact-page',
  imports: [ContactDetails, CtaCareerCard, PartnerTestimonials],
  template: `
    <contact-details />
    <cta-career-card />
    <partner-testimonials />
  `,
})
export class ContactPage {}
