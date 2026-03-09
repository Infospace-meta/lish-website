import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { OfferCardComponent } from '../../components/ourservices/offer-card/offer-card.component';
import { BenefitCardComponent } from '../../components/ourservices/benefit-card/benefit-card.component';
import { HorizontalScrollSectionComponent } from '../../components/horizontal-scroll-section/horizontal-scroll-section.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-upskilling-services-page',
  imports: [
    RouterLink,
    OfferCardComponent,
    BenefitCardComponent,
    HorizontalScrollSectionComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './upskilling-service.component.html',
  styleUrl: './upskilling-service.component.scss',
})
export class UpskillingServicesPage implements OnInit {
  constructor(private Router: Router) {}

  ngOnInit(): void {
    this.Router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
