import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about-ecosystem',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about-ecosystem.html',
})
export class AboutEcosystemComponent {
  tags = ['Youth Talent', 'Generative AI', 'Global Industry', 'Infrastructure'];
}
