import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { OfferCardComponent } from '../../../../components/ourservices/offer-card/offer-card.component';
import { BenefitCardComponent } from '../../../../components/ourservices/benefit-card/benefit-card.component';
import { HorizontalScrollSectionComponent } from '../../../../components/horizontal-scroll-section/horizontal-scroll-section.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-employment-placement',
  templateUrl: './employment-placement.component.html',
  styleUrl: './employment-placement.component.scss',
  imports: [
    RouterLink,
    OfferCardComponent,
    BenefitCardComponent,
    HorizontalScrollSectionComponent,
    ScrollRevealDirective,
  ],
})
export class EmploymentPlacementComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
