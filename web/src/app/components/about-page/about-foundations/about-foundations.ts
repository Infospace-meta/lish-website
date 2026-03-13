import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about-foundations',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about-foundations.html',
})
export class AboutFoundationsComponent {
  pillars = [
    {
      label: 'Mission',
      title: 'Empowerment through Intelligence',
      desc: 'To bridge the digital divide by equipping youth with high-level AI skills and integrating them into the global digital economy.',
      icon: 'rocket_launch',
    },
    {
      label: 'Vision',
      title: 'The Future of Shared Growth',
      desc: 'Becoming the leading global hub where African talent and cutting-edge technology converge to build sustainable digital futures.',
      icon: 'visibility',
    },
    {
      label: 'Values',
      title: 'Ethics, Innovation & Impact',
      desc: 'We are grounded in the belief that AI development must be inclusive, ethical, and focused on solving real-world challenges.',
      icon: 'verified_user',
    },
  ];
}
