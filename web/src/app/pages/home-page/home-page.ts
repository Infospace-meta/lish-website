import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaPartnerCard } from '../../components/cta-partner-card/cta-partner-card';
import { HomeHeroComponent } from '../../components/home-page/home-hero/home-hero';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CtaPartnerCard, HomeHeroComponent],
  template: `
    <app-home-hero [partners]="partners" />
    <cta-partner-card />
  `,
})
export class HomePage {
  partners = [
    { name: 'Acts', src: 'assets/images/partners/acts.png' },
    { name: 'Daraja', src: 'assets/images/partners/Daraja.png' },
    { name: 'DCA', src: 'assets/images/partners/dca-logo.svg' },
    {
      name: 'Innovation Hubs',
      src: 'assets/images/partners/Innovation-Hubs-1.png',
    },
    { name: 'TCDM', src: 'assets/images/partners/TCDM.jpeg' },
    { name: 'Thunderbird', src: 'assets/images/partners/Thunderbird-Logo.png' },
    {
      name: 'UNDP',
      src: 'assets/images/partners/UNDP-Logo-Blue-Large-Transparent-1-edited.png',
    },
  ];
}
