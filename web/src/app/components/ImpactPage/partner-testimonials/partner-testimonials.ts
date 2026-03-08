import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'partner-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full overflow-hidden py-20">
      <!-- Carousel Track -->
      <div
        class="flex items-center"
        [style.transition]="
          isTransitioning
            ? 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)'
            : 'none'
        "
        [style.transform]="getTransform()"
        (transitionend)="handleTransitionEnd()"
      >
        @for (item of displayItems; track $index) {
        <div
          class="shrink-0 transition-all duration-700 px-4"
          [style.width.px]="cardWidth"
          [ngClass]="{
            'blur-md opacity-30 scale-90': activeIndex !== $index,
            'blur-none opacity-100 scale-110 z-10': activeIndex === $index
          }"
        >
          <div
            class="h-full rounded-lg p-8 md:p-12 border border-gray-200 bg-white flex flex-col justify-between space-y-6"
          >
            <div class="relative">
              <span
                class="text-6xl text-blue-100 absolute -top-6 -left-4 font-serif leading-none"
                >“</span
              >
              <p
                class="text-gray-600 italic text-lg relative z-10 leading-relaxed"
              >
                {{ item.quote }}
              </p>
            </div>

            <div class="flex items-center gap-4 border-t pt-6 border-gray-100">
              <img
                [src]="item.image"
                [alt]="item.name"
                class="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-sm"
              />
              <div>
                <h4 class="font-bold text-gray-900 text-lg leading-tight">
                  {{ item.name }}
                </h4>
                <h5 class="text-sm text-blue-600 font-semibold mt-1">
                  {{ item.role }}
                </h5>
              </div>
            </div>
          </div>
        </div>
        }
      </div>

      <!-- Navigation Controls (Dots) -->
      <div class="flex justify-center mt-12 gap-3">
        @for (item of testimonials; track $index) {
        <button
          (click)="goToRealIndex($index)"
          class="h-2.5 transition-all duration-500 rounded-full"
          [class]="
            activeIndex % testimonials.length === $index
              ? 'w-10 bg-blue-600'
              : 'w-2.5 bg-gray-300 hover:bg-gray-400'
          "
        ></button>
        }
      </div>

      <!-- Arrow Navigation -->
      <button
        (click)="prev()"
        class="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white transition-all z-20 group"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        (click)="next()"
        class="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white transition-all z-20 group"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  `,
})
export class PartnerTestimonials implements OnInit, OnDestroy {
  // Real Data
  testimonials = [
    {
      quote:
        'What an inspiring visit it was to Lish AI Labs, a hub where innovation meets impact, providing cutting-edge AI training and youth empowerment.',
      name: 'Dr. Peter Karanja',
      role: 'CEO, Mazao Group of Companies',
      image:
        'https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/624308687_917438137639175_7303411103348456672_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeH9gPEGCix8xwq7XIsS0MsNMel_xkkOwIcx6X_GSQ7Ah-KVc6l8DYo_ja4AJwkRaqy8hEEJgzma0w6PBsoe5Hrq&_nc_ohc=KUdYLxC3m68Q7kNvwHSzGdn&_nc_oc=Adn9qMcQgpwm-096SOxzN1VQe7KnvFEoWC_ofDmgMuccNmF5Y8lZWVWSDB7L2cTKWrE&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=6BQDNK9Rnm1WEauesxfF6g&_nc_ss=8&oh=00_AfwEhyzSlyxYF4hOTWsaFc0HYdEM3KDCf7Myz3hBhYfsPw&oe=69B3889E',
    },
    {
      quote:
        'Lish AI Labs in Nakuru are leading the way in Online Jobs training and we are keen to learn from best practice examples for our Constituency.',
      name: 'John Kj Kiarie',
      role: 'Member, National Assembly Dagoretti South',
      image:
        'https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/647387354_1324677926352379_2557978840791117814_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGWIs1oh93q4nJESiP8O_fEj1s3rJNjA1yPWzesk2MDXJfqmxWcCCExlNygkq__0rWZ3uDJjX1TyPpigiS6hyI_&_nc_ohc=MEjnPtCqyDsQ7kNvwFPqYb0&_nc_oc=AdkGi7TxhB8j5B1JQRmE0GfpbXYICnUw_EtLwRvCHrM9iSTXQECB2b-6aWq05NPgGSA&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=jP5MYumfd6CJEy9LpJDmgA&_nc_ss=8&oh=00_AfyGPEwXA7LIMsPUw6Vm9XzfnBfDJ1-ZIrOpO7iKi9-d6w&oe=69B39164',
    },
    {
      quote:
        "I hosted Lish AI Labs at #JitumeLabs. It's amazing to see online workers earning an average of ksh 30,000 a month.",
      name: 'Eng. John Kipchumba Tanui',
      role: 'PS - State Department of ICT 🇰🇪',
      image:
        'https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/648408338_1324538109699694_7203126583331832474_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGGDsEneCq7rE-p1D1lIi0mrRcpUu8FEXWtFylS7wURdRjCQ9wi8Cl5gKeO8WYRomNLY4n4C41L-yAc5TyHwzH2&_nc_ohc=ZJO051yjHVAQ7kNvwEyVG6y&_nc_oc=Adlmi9WpezGrZTvRCq3YsukxB9ehqSCkoNSz3fxqIdY5VnVQ5QF7dY8rniR7SAMqrJU&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=kWlClyiY9MMMWvwlzOHBHg&_nc_ss=8&oh=00_Afw_NKQi5g2XHbhf1n67FeHUlD-2SngB5_uZst_stF47qg&oe=69B39E33',
    },
  ];

  // Carousel Logic Variables
  displayItems: any[] = [];
  activeIndex = 0;
  isTransitioning = true;
  cardWidth = 500; // Default width
  private autoPlayInterval: any;

  constructor() {
    // Clone items: [Set A][Set B (Real)][Set C]
    this.displayItems = [
      ...this.testimonials,
      ...this.testimonials,
      ...this.testimonials,
    ];
    // Start at the first item of the middle set
    this.activeIndex = this.testimonials.length;
  }

  ngOnInit() {
    this.updateCardWidth();
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  @HostListener('window:resize')
  updateCardWidth() {
    const width = window.innerWidth;
    if (width < 768) {
      this.cardWidth = width * 0.85; // Mobile: 85% of screen
    } else {
      this.cardWidth = 550; // Desktop: fixed width
    }
  }

  // Centering Logic: Viewport center - (cards already passed) - (half of active card)
  getTransform() {
    if (typeof window === 'undefined') return '';
    const offset =
      window.innerWidth / 2 -
      this.activeIndex * this.cardWidth -
      this.cardWidth / 2;
    return `translateX(${offset}px)`;
  }

  next() {
    if (!this.isTransitioning) return;
    this.activeIndex++;
  }

  prev() {
    if (!this.isTransitioning) return;
    this.activeIndex--;
  }

  goToRealIndex(index: number) {
    this.activeIndex = this.testimonials.length + index;
    this.stopAutoPlay();
  }

  // This handles the "Infinite" jump
  handleTransitionEnd() {
    const len = this.testimonials.length;

    // If we reached Set C, jump back to Set B (middle)
    if (this.activeIndex >= len * 2) {
      this.isTransitioning = false;
      this.activeIndex = this.activeIndex - len;
    }
    // If we reached Set A, jump forward to Set B (middle)
    else if (this.activeIndex < len) {
      this.isTransitioning = false;
      this.activeIndex = this.activeIndex + len;
    }

    // Small timeout to re-enable transition after the jump
    setTimeout(() => {
      this.isTransitioning = true;
    }, 50);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.next(), 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
  }
}
