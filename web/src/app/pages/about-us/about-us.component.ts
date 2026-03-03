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
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}