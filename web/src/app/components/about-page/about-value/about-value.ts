import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about-value',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about-value.html',
})
export class AboutValueComponent {
  values = [
    {
      id: '01.',
      title: 'Youth Training',
      desc: 'Proven data experts delivering high-impact skills to over 500+ youth, ensuring success for partners.',
      icon: 'school',
    },
    {
      id: '02.',
      title: 'AI Solutions',
      desc: 'Automating manual work with 24 active AI models, streamlining complex data flows.',
      icon: 'analytics',
    },
    {
      id: '03.',
      title: 'Global Network',
      desc: 'Integrating insights across 12 partner countries, delivering visualization tools.',
      icon: 'auto_awesome',
    },
  ];
}
