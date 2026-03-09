import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  logoUrl?: string;
  logoAlt?: string;
}

@Component({
  selector: 'app-testimonial-carousel',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-carousel.component.html',
  styleUrl: './testimonial-carousel.component.scss',
})
export class TestimonialCarouselComponent implements OnInit, OnDestroy {
  rawIndex = 0;
  isResetting = false;
  private timer!: ReturnType<typeof setInterval>;
  private resetTimeout?: ReturnType<typeof setTimeout>;

  testimonials: Testimonial[] = [
    {
      quote:
        'Lish AI Labs brought both technical depth and genuine enthusiasm to our collaboration. Their data annotation capabilities helped us accelerate our research timelines significantly — the quality of their work is impressive.',
      name: 'Partner 1',
      role: 'Executive Director',
      logoUrl: 'assets/images/partners/acts.png',
      logoAlt: 'ACTS',
    },
    {
      quote:
        'Working with Lish AI has been transformative for our community programs. Their team understood our mission and translated it into AI-driven solutions that genuinely serve the communities we work with.',
      name: 'Partner 2',
      role: 'Program Director',
      logoUrl: 'assets/images/partners/Daraja.png',
      logoAlt: 'Daraja 360',
    },
    {
      quote:
        'Lish AI Labs is a critical partner in the innovation hub ecosystem. Their ability to connect technology, talent, and impact makes them an invaluable ally for hubs across the country.',
      name: 'Partner 3',
      role: 'Network Coordinator',
      logoUrl: 'assets/images/partners/Innovation-Hubs-1.png',
      logoAlt: 'Association of Countrywide Innovation Hubs',
    },
    {
      quote:
        'The team at Lish AI demonstrated exceptional professionalism in delivering data processing solutions aligned with our development goals. Their work ethic and commitment to quality were outstanding throughout the engagement.',
      name: 'Partner 4',
      role: 'Country Representative',
      logoUrl: 'assets/images/partners/UNDP-Logo-Blue-Large-Transparent-1-edited.png',
      logoAlt: 'UNDP',
    },
    {
      quote:
        'Lish AI Labs is a critical partner in the innovation hub ecosystem. Their ability to connect technology, talent, and impact makes them an invaluable ally for hubs across the country.',
      name: 'Partner 5',
      role: 'Network Coordinator',
      logoUrl: 'assets/images/partners/Innovation-Hubs-1.png',
      logoAlt: 'Association of Countrywide Innovation Hubs',
    },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    this.startTimer();
  }

  get activeIndex(): number {
    return this.rawIndex % this.testimonials.length;
  }

  get doubledTestimonials(): Testimonial[] {
    return [...this.testimonials, ...this.testimonials];
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    clearTimeout(this.resetTimeout);
  }

  goTo(index: number): void {
    clearTimeout(this.resetTimeout);
    this.isResetting = false;
    this.rawIndex = index;
    clearInterval(this.timer);
    this.startTimer();
    this.cdr.detectChanges();
  }

  get trackTransform(): string {
    return `translateX(calc(8vw - ${this.rawIndex} * (440px + 1.5rem)))`;
  }

  private advance(): void {
    this.rawIndex++;
    this.cdr.detectChanges();

    if (this.rawIndex === this.testimonials.length) {
      // Wait for the CSS slide transition to finish, then snap silently back to index 0.
      // Position 0 and position N are visually identical (same card content, same offset).
      this.resetTimeout = setTimeout(() => {
        this.ngZone.run(() => {
          this.isResetting = true;
          this.cdr.detectChanges();
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.rawIndex = 0;
              this.cdr.detectChanges();
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  this.isResetting = false;
                  this.cdr.detectChanges();
                });
              });
            });
          });
        });
      }, 700);
    }
  }

  private startTimer(): void {
    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.ngZone.run(() => {
          this.advance();
        });
      }, 4500);
    });
  }
}
