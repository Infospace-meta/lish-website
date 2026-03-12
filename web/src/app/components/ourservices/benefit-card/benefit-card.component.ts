import {
  Component,
  Input,
  AfterViewInit,
  OnDestroy,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-benefit-card',
  standalone: true,
  templateUrl: './benefit-card.component.html',
  styleUrl: './benefit-card.component.scss',
})
export class BenefitCardComponent implements AfterViewInit, OnDestroy {
  @Input() index: string = '01';
  @Input() icon: string = 'person';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() delay: number = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const nativeEl = this.el.nativeElement as HTMLElement;
    nativeEl.classList.add('benefit-card--left');
    nativeEl.style.transitionDelay = `${this.delay}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('benefit-card--visible');
            target.classList.remove('benefit-card--left', 'benefit-card--right');
          } else {
            target.classList.remove('benefit-card--visible');
            if (entry.boundingClientRect.top > 0) {
              /** Card is below viewport — scrolling DOWN → enter from left, move right */
              target.classList.add('benefit-card--left');
              target.classList.remove('benefit-card--right');
            } else {
              /** Card is above viewport — scrolling UP → enter from right, move left */
              target.classList.add('benefit-card--right');
              target.classList.remove('benefit-card--left');
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    this.observer.observe(nativeEl);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
