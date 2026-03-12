import { Component } from '@angular/core';
import { CtaPartnerCard } from '../../components/cta-partner-card/cta-partner-card';

@Component({
  selector: 'app-home-page',
  imports: [CtaPartnerCard],
  template: ` <cta-partner-card /> `,
})
export class HomePage {}
