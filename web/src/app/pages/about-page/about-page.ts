import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

// Modular About-Page Components
import { AboutHeroComponent } from '../../components/about-page/about-hero/about-hero';
import { AboutEcosystemComponent } from '../../components/about-page/about-ecosystem/about-ecosystem';
import { AboutValueComponent } from '../../components/about-page/about-value/about-value';
import { AboutNetworkComponent } from '../../components/about-page/about-network/about-network';
import { FrameworkSectionComponent } from '../../components/about-page/framework-section/framework-section.component';
import { AboutFoundationsComponent } from '../../components/about-page/about-foundations/about-foundations';

// Shared Layout Components
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AboutHeroComponent,
    AboutEcosystemComponent,
    AboutFoundationsComponent,
    AboutValueComponent,
    AboutNetworkComponent,
    FrameworkSectionComponent,
  ],
  templateUrl: './about-us.component.html',
})
export class AboutPage implements OnInit, OnDestroy {
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
    { name: 'DCA', src: 'assets/images/partners/dca-logo.svg' },
    { name: 'Thunderbird', src: 'assets/images/partners/Thunderbird-Logo.png' },
    { name: 'Daraja', src: 'assets/images/partners/Daraja.png' },
    { name: 'TCDM', src: 'assets/images/partners/TCDM.jpeg' },
    {
      name: 'UNDP',
      src: 'assets/images/partners/UNDP-Logo-Blue-Large-Transparent-1-edited.png',
    },
  ];

  carouselImages = [
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1772716390/samples/Lish-website/IMG_5145_waietl.jpg',
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1772716340/samples/Lish-website/IMG_5050_qkexrb.jpg',
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1772716046/samples/Lish-website/IMG_4945_mizqkg.jpg',
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/aboutlish_mc39qx.jpg',
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1772716374/samples/Lish-website/IMG_5217_jy2b5d.jpg',
  ];

  currentIndex = 0;
  private carouselInterval: any;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    // Ensure page starts at top on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    this.startCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
    this.cdr.detectChanges();
  }

  // Handle slide selection from Hero component
  onSlideChange(index: number) {
    this.currentIndex = index;
    this.resetTimer();
  }

  resetTimer() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.startCarousel();
    }
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }
}
