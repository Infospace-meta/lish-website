import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-framework-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './framework-section.component.html',
})
export class FrameworkSectionComponent {
  steps = [
    {
      id: '01',
      title: 'Discovery & Talent Sourcing',
      desc: 'We identify high-potential youth from diverse backgrounds, providing the baseline infrastructure for digital literacy and AI curiosity.'
    },
    {
      id: '02',
      title: 'Intensive Laboratory Sprints',
      desc: 'Collaborative environments where teams work on real-world industry datasets to solve local and global challenges.'
    },
    {
      id: '03',
      title: 'Integration & Deployment',
      desc: 'Transitioning labs from experimental phases to fully integrated software solutions ready for market impact.'
    }
  ];
}