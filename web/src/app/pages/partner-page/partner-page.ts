import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { OfferCardComponent } from '../../components/ourservices/offer-card/offer-card.component';
import { BenefitCardComponent } from '../../components/ourservices/benefit-card/benefit-card.component';
import { HorizontalScrollSectionComponent } from '../../components/horizontal-scroll-section/horizontal-scroll-section.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
import { TestimonialCarouselComponent } from '../../components/testimonial-carousel/testimonial-carousel.component';
import { PartnerTestimonials } from '../../components/ImpactPage/partner-testimonials/partner-testimonials';
import { CtaPartnerCard } from "../../components/cta-partner-card/cta-partner-card";

@Component({
  selector: 'app-partner-page',
  imports: [
    RouterLink,
    OfferCardComponent,
    BenefitCardComponent,
    HorizontalScrollSectionComponent,
    ScrollRevealDirective,
    TestimonialCarouselComponent,
  ],
  templateUrl: './partner-page.component.html',
  styleUrl: './partner-page.component.scss',
})
export class PartnerPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
