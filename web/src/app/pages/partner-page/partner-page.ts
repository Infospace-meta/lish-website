import { Component } from '@angular/core';
import { PartnerTestimonials } from '../../components/ImpactPage/partner-testimonials/partner-testimonials';
import { CtaPartnerCard } from "../../components/cta-partner-card/cta-partner-card";

@Component({
  selector: 'app-partner-page',
  imports: [PartnerTestimonials, CtaPartnerCard],
  template: ` 
  <cta-partner-card />
  <partner-testimonials /> `,
})
export class PartnerPage {}
