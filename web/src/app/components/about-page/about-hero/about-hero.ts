import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about-hero.html',
})
export class AboutHeroComponent {
  @Input() partners: any[] = [];
  @Input() carouselImages: string[] = [];
  @Input() currentIndex: number = 0;

  @Output() slideChanged = new EventEmitter<number>();
  @Output() timerReset = new EventEmitter<void>();

  goToSlide(index: number) {
    this.slideChanged.emit(index);
    this.timerReset.emit();
  }

  handleImageError(event: any) {
    event.target.style.display = 'none';
  }
}
