import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  templateUrl: './offer-card.component.html',
})
export class OfferCardComponent {
  @Input() index: string = '01';
  @Input() icon: string = 'star';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
}
