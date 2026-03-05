import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TeamSectionComponent } from '../../components/team-section/team-section.component';
import { RoadmapSectionComponent } from '../../components/roadmap-section/roadmap-section.component';
import { FrameworkSectionComponent } from '../../components/framework-section/framework-section.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    TeamSectionComponent, 
    RoadmapSectionComponent,
    FrameworkSectionComponent
  ],
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit, OnDestroy {
  partners = [
    { name: 'Acts', src: 'assets/images/partners/acts.png' },
    { name: 'Daraja', src: 'assets/images/partners/Daraja.png' },
    { name: 'DCA', src: 'assets/images/partners/dca-logo.svg' },
    { name: 'Innovation Hubs', src: 'assets/images/partners/Innovation-Hubs-1.png' },
    { name: 'TCDM', src: 'assets/images/partners/TCDM.jpeg' },
    { name: 'Thunderbird', src: 'assets/images/partners/Thunderbird-Logo.png' },
    { name: 'UNDP', src: 'assets/images/partners/UNDP-Logo-Blue-Large-Transparent-1-edited.png' },
    { name: 'DCA', src: 'assets/images/partners/dca-logo.svg' },
    { name: 'Thunderbird', src: 'assets/images/partners/Thunderbird-Logo.png' },
    { name: 'Daraja', src: 'assets/images/partners/Daraja.png' },
    { name: 'TCDM', src: 'assets/images/partners/TCDM.jpeg' },
    { name: 'UNDP', src: 'assets/images/partners/UNDP-Logo-Blue-Large-Transparent-1-edited.png' },
  ];

  carouselImages = [
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/aboutlish_mc39qx.jpg',
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/aboutlish_mc39qx.jpg',
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/aboutlish_mc39qx.jpg',
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/aboutlish_mc39qx.jpg'
  ];
  
  currentIndex = 0;
  private carouselInterval: any;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
    // Explicitly start carousel on page load
    this.startCarousel();
  }

  startCarousel() {
    // interval set to 5 seconds
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
    // Force Angular to check for changes to ensure animation triggers
    this.cdr.detectChanges();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  resetTimer() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.startCarousel();
    }
  }

  handleImageError(event: any) {
    const img = event.target;
    img.style.display = 'none'; 
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }
}