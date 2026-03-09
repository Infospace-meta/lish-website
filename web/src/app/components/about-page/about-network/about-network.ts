import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about-network',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section
      appScrollReveal
      class="px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32 border-t font-poppins border-black/5 bg-[#F9F8F6] overflow-hidden"
    >
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-28">
          <div class="lg:w-[32%]">
            <span
              class="inline-block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-accent mb-5 sm:mb-6 reveal-text delay-1"
              >Trusted by our valued partners</span
            >
            <h2
              class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium mb-5 sm:mb-6 text-primary reveal-text delay-2"
            >
              Network
            </h2>
            <p
              class="text-text-muted text-base sm:text-lg lg:text-xl font-light leading-relaxed reveal-text delay-3 max-w-md"
            >
              We collaborate with global institutions to ensure our solutions
              are grounded in excellence.
            </p>
          </div>
          <div class="lg:w-[68%]">
            <div
              class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
            >
              <div
                *ngFor="let partner of partners; let i = index"
                class="partner-card-grid-item flex items-center justify-center reveal-text"
                [style.animation-delay]="0.05 * i + 's'"
              >
                <img
                  [src]="partner.src"
                  [alt]="partner.name"
                  class="max-h-[30px] sm:max-h-[45px] w-auto object-contain block opacity-80 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
            <div
              class="mt-8 sm:mt-10 lg:mt-12 flex justify-start sm:justify-end reveal-text delay-7"
            >
              <button
                class="group flex items-center gap-3 text-sm font-medium tracking-wide"
              >
                <span
                  class="border-b border-transparent group-hover:border-primary transition-all"
                  >See all</span
                >
                <div
                  class="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:rotate-90"
                >
                  <span class="material-symbols-outlined text-white text-[16px]"
                    >add</span
                  >
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutNetworkComponent {
  @Input() partners: any[] = [];
}
