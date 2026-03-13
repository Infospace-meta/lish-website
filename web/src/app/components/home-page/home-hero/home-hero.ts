import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  template: `
    <section
      appScrollReveal
      class="relative min-h-[90vh] flex flex-col justify-center pt-20 sm:pt-24 pb-12 overflow-hidden bg-warm-bg font-poppins"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32"
        >
          <!-- left hero section -->
          <div class="reveal-text delay-1 order-1 text-left">
            <h1
              class="text-5xl sm:text-7xl lg:text-8xl font-medium leading-[1.1] lg:leading-[0.9] tracking-tight text-primary mb-6 sm:mb-8"
            >
              Accelerating <br class="hidden sm:block" />
              <span class="relative inline-block">
                Growth
                <div
                  class="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-[3px] sm:h-[4px] bg-accent/20 rounded-full"
                ></div>
              </span>
              <br />
              Through AI.
            </h1>

            <p
              class="max-w-lg text-base sm:text-lg lg:text-xl text-text-muted font-light leading-relaxed mb-10 sm:mb-12"
            >
              Leverage high-level artificial intelligence to catalyze your
              growth. We optimize your data and processes, creating a crucial
              foundation for scaling global impact.
            </p>

            <div
              class="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
            >
              <a
                routerLink="/contact"
                class="w-full sm:w-auto text-center bg-primary text-white px-10 py-4 rounded-full font-medium transition-all hover:bg-accent hover:shadow-2xl hover:shadow-accent/30 active:scale-95"
              >
                Contact us
              </a>
              <a
                routerLink="/about"
                class="w-full sm:w-auto text-center bg-transparent border border-black/10 text-primary px-10 py-4 rounded-full font-medium transition-all hover:bg-black/5 active:scale-95"
              >
                About us
              </a>
            </div>
          </div>

          <!-- scrolling carousel section -->
          <div
            class="order-2  lg:order-2 relative aspect-square w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none mx-auto flex flex-col items-center justify-center z-0 mt-4 lg:mt-0"
          >
            <div
              class="relative mb-4 sm:mb-6  w-full h-[80%] sm:h-[85%] flex items-center justify-center"
            >
              <div
                *ngFor="let img of carouselImages; let i = index"
                class="absolute  w-[105%] h-[105%] sm:h-[100%] transition-all duration-1000 ease-in-out rounded-xl sm:rounded-[1.5rem] overflow-hidden border border-black/10 shadow-2xl"
                [ngClass]="{
                  'z-30 opacity-100 scale-100 translate-x-0 translate-y-0':
                    i === currentIndex,
                  'z-20 opacity-70 scale-95 translate-x-4 sm:translate-x-10 translate-y-4 sm:translate-y-10 rotate-2':
                    i === (currentIndex + 1) % carouselImages.length,
                  'z-10 opacity-40 scale-90 translate-x-8 sm:translate-x-20 translate-y-8 sm:translate-y-20 rotate-6':
                    i === (currentIndex + 2) % carouselImages.length,
                  'z-0 opacity-0 scale-75':
                    i !== currentIndex &&
                    i !== (currentIndex + 1) % carouselImages.length &&
                    i !== (currentIndex + 2) % carouselImages.length,
                }"
              >
                <img
                  [src]="img"
                  alt="Lish AI Hub Visuals"
                  class="w-full h-full object-cover"
                  (error)="handleImageError($event)"
                />
              </div>
            </div>

            <div
              class="mt-6 sm:mt-12 flex items-center justify-center gap-2 sm:gap-3"
            >
              <div
                *ngFor="let img of carouselImages; let i = index"
                (click)="goToSlide(i)"
                class="h-1 sm:h-1.5 transition-all duration-500 rounded-full cursor-pointer hover:bg-accent/50"
                [ngClass]="
                  i === currentIndex
                    ? 'w-8 sm:w-10 bg-accent'
                    : 'w-1.5 sm:w-2 bg-black/10'
                "
              ></div>
            </div>

            <div
              class="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center scale-90 sm:scale-110 lg:scale-125"
            >
              <div
                class="absolute w-[100%] h-[100%] border border-black/[0.03] rounded-full"
              ></div>
              <div
                class="absolute w-[85%] h-[85%] border border-black/[0.05] rounded-full animate-pulse"
              ></div>
            </div>
          </div>
        </div>

        <!-- PArtners logo section -->

        <div class="reveal-text delay-7 border-t border-black/5 pt-10 sm:pt-12">
          <p
            class="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-accent/60 mb-8 sm:mb-10 text-center lg:text-left"
          >
            Trusted by 80+ partners
          </p>
          <div
            class="relative w-full overflow-hidden h-10 sm:h-16 flex items-center"
          >
            <div class="logo-track flex gap-12 sm:gap-24 items-center">
              <ng-container *ngFor="let p of partners.concat(partners)">
                <img
                  [src]="p.src"
                  [alt]="p.name"
                  class="h-6 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  (error)="handleImageError($event)"
                />
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeHeroComponent implements OnInit, OnDestroy {
  @Input() partners: any[] = [];

  carouselImages = [
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1772716390/samples/Lish-website/IMG_5145_waietl.jpg',
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1772716340/samples/Lish-website/IMG_5050_qkexrb.jpg',
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1772716046/samples/Lish-website/IMG_4945_mizqkg.jpg',
    'https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/aboutlish_mc39qx.jpg',
  ];

  currentIndex = 0;
  private interval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
      this.cdr.detectChanges();
    }, 6000);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    if (this.interval) {
      clearInterval(this.interval);
      this.startAutoSlide();
    }
  }

  handleImageError(event: any) {
    event.target.style.display = 'none';
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }
}
