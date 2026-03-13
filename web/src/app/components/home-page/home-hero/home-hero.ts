import { Component, Input } from '@angular/core';
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
      class="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-warm-bg font-poppins"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32"
        >
          <div class="reveal-text delay-1 order-1">
            <h1
              class="text-5xl sm:text-7xl lg:text-8xl font-medium leading-[1.1] lg:leading-[0.95] tracking-tight text-primary mb-6 sm:mb-8"
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

            <div class="flex flex-col sm:flex-row gap-4 items-center">
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

          <div
            class="relative reveal-text delay-3 h-[350px] sm:h-[500px] flex items-center justify-center lg:justify-end order-2 mt-8 lg:mt-0"
          >
            <div
              class="absolute top-0 left-0 sm:left-10 lg:left-0 z-20 w-[240px] sm:w-[320px] p-5 sm:p-6 bg-white/80 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border border-white/50 animate-float"
            >
              <div class="flex justify-between items-center mb-3 sm:mb-4">
                <span
                  class="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-accent"
                  >Laboratory Metrics</span
                >
                <span class="material-symbols-outlined text-primary/20 text-xl"
                  >analytics</span
                >
              </div>
              <p class="text-[10px] sm:text-xs text-text-muted mb-1">
                Active lab sessions
              </p>
              <h3
                class="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 tracking-tighter"
              >
                1 482
              </h3>
              <div
                class="h-10 sm:h-12 w-full bg-soft-grey rounded-lg overflow-hidden flex items-end gap-1 p-1"
              >
                <div
                  *ngFor="let h of [40, 70, 50, 90, 60, 85, 45]"
                  [style.height.%]="h"
                  class="flex-1 bg-accent/30 rounded-t-[2px]"
                ></div>
              </div>
            </div>

            <div
              class="absolute bottom-4 right-0 sm:right-10 lg:right-0 z-30 w-[220px] sm:w-[280px] p-5 sm:p-6 bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border border-black/[0.03] animate-float-delayed"
            >
              <div class="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-complement/10 flex items-center justify-center text-complement"
                >
                  <span class="material-symbols-outlined text-lg sm:text-xl"
                    >payments</span
                  >
                </div>
                <div>
                  <p
                    class="text-[8px] sm:text-[10px] uppercase font-bold text-primary opacity-40 leading-none"
                  >
                    AI Efficiency
                  </p>
                  <h4 class="text-base sm:text-lg font-bold text-primary">
                    40% Savings
                  </h4>
                </div>
              </div>
              <div class="space-y-2">
                <div
                  class="flex justify-between text-[9px] sm:text-[11px] font-medium"
                >
                  <span class="text-text-muted">Automation Rate</span>
                  <span class="text-green-600">+85%</span>
                </div>
                <div
                  class="w-full h-1 bg-soft-grey rounded-full overflow-hidden"
                >
                  <div class="w-[85%] h-full bg-accent rounded-full"></div>
                </div>
              </div>
            </div>

            <div
              class="absolute w-[280px] sm:w-[450px] aspect-square rounded-full border border-black/[0.02] flex items-center justify-center"
            >
              <div
                class="w-[75%] sm:w-[80%] aspect-square rounded-full border border-black/[0.04] animate-pulse"
              ></div>
              <span
                class="absolute text-[120px] sm:text-[220px] lg:text-[250px] font-bold text-black/[0.01] pointer-events-none select-none"
                >LISH</span
              >
            </div>
          </div>
        </div>

        <div class="reveal-text delay-7 border-t border-black/5 pt-10 sm:pt-12">
          <p
            class="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-accent/60 mb-8 sm:mb-10 text-center lg:text-left"
          >
            Trusted by 80+ partners
          </p>

          <div
            class="relative w-full overflow-hidden h-10 sm:h-12 flex items-center"
          >
            <div class="logo-track flex gap-12 sm:gap-24 items-center">
              <ng-container *ngFor="let p of partners.concat(partners)">
                <img
                  [src]="p.src"
                  [alt]="p.name"
                  class="h-5 sm:h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
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
export class HomeHeroComponent {
  @Input() partners: any[] = [];

  handleImageError(event: any) {
    event.target.style.display = 'none';
  }
}
