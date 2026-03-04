import { Component, OnInit } from '@angular/core';
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
export class AboutUsComponent implements OnInit {
  partners = [
    { name: 'Acts', src: 'assets/images/partners/acts.png' },
    { name: 'Daraja', src: 'assets/images/partners/Daraja.png' },
    { name: 'DCA', src: 'assets/images/partners/dca-logo.svg' },
    { name: 'Innovation Hubs', src: 'assets/images/partners/Innovation-Hubs-1.png' },
    { name: 'TCDM', src: 'assets/images/partners/TCDM.jpeg' },
    { name: 'Thunderbird', src: 'assets/images/partners/Thunderbird-Logo.png' },
    { name: 'UNDP', src: 'assets/images/partners/UNDP-Logo-Blue-Large-Transparent-1-edited.png' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  handleImageError(event: any) {
    console.error('Lish AI Labs - Image failed to load:', event.target.src);
  }
}