import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { OfferCardComponent } from '../ourservices/offer-card/offer-card.component';
import { BenefitCardComponent } from '../ourservices/benefit-card/benefit-card.component';
import { HorizontalScrollSectionComponent } from '../horizontal-scroll-section/horizontal-scroll-section.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'tech-services',
  imports: [RouterLink, OfferCardComponent, BenefitCardComponent, HorizontalScrollSectionComponent, ScrollRevealDirective],
  templateUrl: './tech-services.component.html',
  styleUrl: './tech-services.component.scss',
})
export class TechServicesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}