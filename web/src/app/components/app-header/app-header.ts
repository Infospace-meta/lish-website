import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Required for @if/ngIf if not using latest control flow

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <!-- Main Header Wrapper -->
    <div
      class="relative max-w-7xl mx-auto flex w-full xl:py-14 justify-between items-center h-16 bg-transparent text-neutral-700 px-4 top-0 left-0 right-0 z-50 max-md:sticky max-md:bg-white"
    >
      <!-- Logo -->
      <div>
        <a routerLink="/home" (click)="closeEverything()">
          <img
            src="https://res.cloudinary.com/dpfcle0os/image/upload/v1706977858/samples/Lish-website/lish-logo_jhm8ac.png"
            class="h-auto lg:w-20 w-16 rounded-sm"
            alt="Lish Logo"
          />
        </a>
      </div>

      <!-- DESKTOP NAVIGATION (Hidden on mobile) -->
      <nav
        class="hidden lg:flex space-x-6 rounded-full px-4 py-2 bg-neutral-200/60 relative"
      >
        <!-- Services Trigger -->
        <div
          (click)="toggleMenu('services')"
          [ngClass]="
            activeMenu === 'services'
              ? 'bg-white text-accent shadow-sm'
              : 'text-neutral-600 hover:text-accent'
          "
          class="px-4 py-1 cursor-pointer text-neutral-600 rounded-full hover:text-accent font-semibold transition-colors"
        >
          Services
        </div>

        <!-- Impact Trigger -->
        <div
          (click)="toggleMenu('impact')"
          [ngClass]="
            activeMenu === 'impact'
              ? 'bg-white text-accent shadow-sm'
              : 'text-neutral-600 hover:text-accent'
          "
          class="px-4 py-1 cursor-pointer text-neutral-600 rounded-full hover:text-accent font-semibold transition-colors"
        >
          Impact
        </div>

        <!-- Company Trigger -->
        <div
          (click)="toggleMenu('company')"
          [ngClass]="
            activeMenu === 'company'
              ? 'bg-white text-accent shadow-sm'
              : 'text-neutral-600 hover:text-accent'
          "
          class="px-4 py-1 cursor-pointer text-neutral-600 rounded-full hover:text-accent font-semibold transition-colors"
        >
          Company
        </div>
      </nav>

      <!-- Right Side Actions -->
      <div class="flex items-center space-x-4 p-1">
        <a
          routerLink="/contact"
          (click)="closeMenu()"
          class="hidden md:block px-4 py-2 bg-blue-800 text-neutral-100 rounded-full hover:bg-blue-900 transition-colors font-semibold"
        >
          Contact Us
        </a>

        <!-- Mobile Toggle Button -->
        <button
          (click)="toggleMobileMenu()"
          type="button"
          class="lg:hidden p-2 text-neutral-700 focus:outline-none"
        >
          @if (!isMobileMenuOpen) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
              fill="currentColor"
            >
              <path
                d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
              />
            </svg>
          } @else {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
              fill="currentColor"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          }
        </button>
      </div>
    </div>

    <!-- FIXED SUB-NAV PANEL -->
    @if (activeMenu) {
      <div class="fixed inset-0 z-30" (click)="closeMenu()"></div>
      <div
        class="hidden lg:block absolute left-[25%] right-[25%] bg-white border-b border-gray-100  rounded-[1rem] shadow-2xl animate-in slide-in-from-top-2 duration-200 z-40"
      >
        <div class="max-w-screen-xl mx-auto px-10 py-10">
          <!-- Content for Impact -->
          @if (activeMenu === 'impact') {
            <div class="grid grid-cols-3 gap-10">
              <div class="col-span-1">
                <h3 class="text-xl font-bold text-blue-800 mb-2">Our Impact</h3>
                <p class="text-sm text-neutral-500">
                  Discover how we are changing lives through sustainable
                  development and innovation.
                </p>
              </div>
              <div class="flex flex-col space-y-3">
                <a
                  routerLink="/impact/education"
                  class="font-semibold hover:text-accent"
                  >Education Support</a
                >
                <a
                  routerLink="/impact/health"
                  class="font-semibold hover:text-accent"
                  >Health Initiatives</a
                >
              </div>
              <div class="flex flex-col space-y-3">
                <a
                  routerLink="/impact/sustainability"
                  class="font-semibold hover:text-accent"
                  >Sustainability</a
                >
                <a
                  routerLink="/impact/reports"
                  class="font-semibold hover:text-accent"
                  >Annual Reports</a
                >
              </div>
            </div>
          }

          <!-- Content for Services -->
          @if (activeMenu === 'services') {
            <div class="grid grid-cols-3 gap-10">
              <div
                class="p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <a routerLink="services/data-annotation" class="block">
                  <h4 class="font-bold group-hover:text-accent">
                    Data Processing & Annotation
                  </h4>
                  <p class="text-xs text-neutral-500 font-small">
                    From raw data processing to precision annotation
                  </p>
                </a>
              </div>
              <div
                class="p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <a routerLink="services/design-and-development" class="block">
                  <h4 class="font-bold group-hover:text-accent">
                    Software Development
                  </h4>
                  <p class="text-xs text-neutral-500">
                    End-to-end solutions for digital transformation
                  </p>
                </a>
              </div>
              <div
                class="p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <a routerLink="services/skill-building-programs" class="block">
                  <h4 class="font-bold group-hover:text-accent">
                    Training & Upskilling Services
                  </h4>
                  <p class="text-xs text-neutral-500">
                    Comprehensive training and development opportunities.
                  </p>
                </a>
              </div>
            </div>
          }

          <!-- Content for Company -->
          @if (activeMenu === 'company') {
            <div class="grid grid-cols-4 gap-10">
              <div
                class="p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <a routerLink="about_us" class="block">
                  <h4 class="font-bold group-hover:text-accent">About Us</h4>
                  <p class="text-xs text-neutral-500">What Drives Us</p>
                </a>
              </div>
              <div
                class="p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <a routerLink="services/design-and-development" class="block">
                  <h4 class="font-bold group-hover:text-accent">Our Team</h4>
                  <p class="text-xs text-neutral-500">
                    Meet The Experts Behind Our Solutions
                  </p>
                </a>
              </div>
              <div
                class="p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <a routerLink="services/skill-building-programs" class="block">
                  <h4 class="font-bold group-hover:text-accent">Careers</h4>
                  <p class="text-xs text-neutral-500">
                    Grow Your Potential With Us
                  </p>
                </a>
              </div>
              <div
                class="p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <a routerLink="contact" class="block">
                  <h4 class="font-bold group-hover:text-accent">Contact Us</h4>
                  <p class="text-xs text-neutral-500">Talk To Us</p>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    }

    <!-- MOBILE MENU OVERLAY -->
    @if (isMobileMenuOpen) {
      <div
        class="lg:hidden  fixed inset-0 top-16 bg-white z-40 p-6 overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        <nav class="flex flex-col justify-between h-full">
          <div class="flex flex-col space-y-4">
            <!-- Services Accordion -->
            <div>
              <button
                (click)="toggleMobileSub('services')"
                class="w-full flex justify-between items-center text-lg font-semibold py-2 border-b border-neutral-100"
              >
                Services <span>{{ mobileSub === 'services' ? '−' : '+' }}</span>
              </button>
              @if (mobileSub === 'services') {
                <div
                  class="pl-4 py-4 flex flex-col space-y-4 animate-in slide-in-from-top-2"
                >
                  <a
                    routerLink="services/data-annotation"
                    (click)="closeEverything()"
                    class="text-lg text-neutral-600"
                    >Data Processing & Annotation</a
                  >
                  <a
                    routerLink="services/design-and-development"
                    (click)="closeEverything()"
                    class="text-lg text-neutral-600"
                    >Software Development</a
                  >
                  <a
                    routerLink="services/skill-building-programs"
                    (click)="closeEverything()"
                    class="text-lg text-neutral-600"
                    >Training & Upskilling Services</a
                  >
                </div>
              }
            </div>

            <!-- Impact Accordion -->
            <div>
              <button
                (click)="toggleMobileSub('impact')"
                class="w-full flex justify-between items-center text-lg font-semibold py-2 border-b border-neutral-100"
              >
                Impact <span>{{ mobileSub === 'impact' ? '−' : '+' }}</span>
              </button>
              @if (mobileSub === 'impact') {
                <div
                  class="pl-4 py-4 flex flex-col space-y-4 animate-in slide-in-from-top-2"
                >
                  <a
                    routerLink="/impact/education"
                    (click)="closeEverything()"
                    class="text-lg text-neutral-600"
                    >Education Support</a
                  >
                  <a
                    routerLink="/impact/health"
                    (click)="closeEverything()"
                    class="text-lg text-neutral-600"
                    >Health Initiatives</a
                  >
                  <a
                    routerLink="/impact/sustainability"
                    (click)="closeEverything()"
                    class="text-lg text-neutral-600"
                    >Sustainability</a
                  >
                </div>
              }
            </div>

            <!-- Company Accordion -->
            <div>
              <button
                (click)="toggleMobileSub('company')"
                class="w-full flex justify-between items-center text-lg font-semibold py-2 border-b border-neutral-100"
              >
                Company <span>{{ mobileSub === 'company' ? '−' : '+' }}</span>
              </button>
              @if (mobileSub === 'company') {
                <div
                  class="pl-4 py-4 flex flex-col space-y-4 animate-in slide-in-from-top-2"
                >
                  <a
                    routerLink="about_us"
                    (click)="closeEverything()"
                    class="text-lg text-neutral-600"
                    >About Us</a
                  >
                  <a
                    routerLink=""
                    (click)="closeEverything()"
                    class="text-lg text-neutral-600"
                    >Our Team</a
                  >
                  <a
                    routerLink=""
                    (click)="closeEverything()"
                    class="text-lg text-neutral-600"
                    >Careers</a
                  >
                  <a
                    routerLink="contact"
                    (click)="closeEverything()"
                    class="text-lg text-neutral-600"
                    >Contact Us</a
                  >
                </div>
              }
            </div>
          </div>
          <div class="flex flex-end justify-end mt-6">
            <a
              routerLink="/contact"
              (click)="closeEverything()"
              class=" bg-blue-800 w-full text-center text-neutral-100 rounded-full font-bold py-2 border-b border-neutral-100 text-accent"
              >Contact Us</a
            >
          </div>
        </nav>
      </div>
    }
  `,
})
export class AppHeader {
  activeMenu: string | null = null;
  isMobileMenuOpen = false; // Mobile Overlay
  mobileSub: string | null = null; // Mobile Accordion

  /**Toggle dropdown menus */
  toggleMenu(menuName: string) {
    /**If the clicked menu is already open, close it. Otherwise, open the new one. */
    this.activeMenu = this.activeMenu === menuName ? null : menuName;
  }

  /**Toggle mobile menu */
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) this.mobileSub = null;
  }

  /**Toggle mobile submenu */
  toggleMobileSub(name: string) {
    this.mobileSub = this.mobileSub === name ? null : name;
  }

  closeMenu() {
    this.activeMenu = null;
  }

  closeEverything() {
    this.activeMenu = null;
    this.isMobileMenuOpen = false;
    this.mobileSub = null;
  }
}
