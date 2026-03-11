import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div
      class="relative max-w-7xl mx-auto flex w-full xl:py-14 justify-between items-center  h-16 bg-transparent text-neutral-700 px-4 top-0 left-0 right-0 z-50 max-md:sticky max-md:bg-white"
    >
      <div>
        <a routerLink="/home" (click)="closeEverything()">
          <img
            src="https://res.cloudinary.com/dpfcle0os/image/upload/v1706977858/samples/Lish-website/lish-logo_jhm8ac.png"
            class="h-auto lg:w-20 w-16 rounded-sm"
            alt="Lish Logo"
          />
        </a>
      </div>

      <nav
        class="hidden lg:flex items-center bg-neutral-200/60  rounded-full px-1 py-1 relative shadow-sm"
      >
        <div
          (click)="toggleMenu('services')"
          [ngClass]="
            activeMenu === 'services'
              ? 'bg-accent text-white shadow-lg scale-105'
              : 'text-neutral-600 hover:text-accent'
          "
          class="px-5 py-2 cursor-pointer rounded-full font-semibold transition-all duration-500 flex items-center gap-1 group"
        >
          <span>services</span>
          <span
            class="material-symbols-outlined text-[18px] transition-transform duration-300"
            [ngClass]="{ 'rotate-180': activeMenu === 'services' }"
            >expand_more</span
          >
        </div>

        <div
          (click)="toggleMenu('impact')"
          [ngClass]="
            activeMenu === 'impact'
              ? 'bg-accent text-white shadow-lg scale-105'
              : 'text-neutral-600 hover:text-accent'
          "
          class="px-5 py-2 cursor-pointer rounded-full font-semibold transition-all duration-500 flex items-center gap-1 group"
        >
          <span>impact</span>
          <span
            class="material-symbols-outlined text-[18px] transition-transform duration-300"
            [ngClass]="{ 'rotate-180': activeMenu === 'impact' }"
            >expand_more</span
          >
        </div>

        <div
          (click)="toggleMenu('company')"
          [ngClass]="
            activeMenu === 'company'
              ? 'bg-accent text-white shadow-lg scale-105'
              : 'text-neutral-600 hover:text-accent'
          "
          class="px-5 py-2 cursor-pointer rounded-full font-semibold transition-all duration-500 flex items-center gap-1 group"
        >
          <span>company</span>
          <span
            class="material-symbols-outlined text-[18px] transition-transform duration-300"
            [ngClass]="{ 'rotate-180': activeMenu === 'company' }"
            >expand_more</span
          >
        </div>
      </nav>

      <div class="flex items-center space-x-4 p-1">
        <a
          routerLink="/contact"
          (click)="closeEverything()"
          class="hidden md:block px-6 py-2.5 bg-accent text-neutral-100 rounded-full hover:bg-complement transition-all duration-300 font-semibold shadow-lg hover:shadow-accent/20"
        >
          Contact Us
        </a>

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

    @if (activeMenu) {
      <div class="fixed inset-0 z-30 bg-black/5" (click)="closeMenu()"></div>
      <div
        class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 animate-mega-in z-40"
      >
        <div class="p-10">
          @if (activeMenu === 'impact') {
            <div class="grid grid-cols-2 gap-6">
              <a
                routerLink="partner"
                (click)="closeEverything()"
                class="p-4 rounded-md hover:bg-neutral-50 transition-all group"
              >
                <h4 class="font-bold text-lg group-hover:text-accent">
                  Our Partners
                </h4>
                <p
                  class="text-sm text-accent group-hover:text-primary font-semibold leading-relaxed"
                >
                  Strategic Partnerships
                </p>
              </a>
              <a
                routerLink="success"
                (click)="closeEverything()"
                class="p-4 rounded-xl hover:bg-neutral-50 transition-all group"
              >
                <h4
                  class="font-bold text-lg group-hover:text-accent transition-colors"
                >
                  Success & Impact
                </h4>
                <p
                  class="text-sm text-accent group-hover:text-primary font-semibold leading-relaxed"
                >
                  Real Results, Real Impact
                </p>
              </a>
            </div>
          }

          @if (activeMenu === 'services') {
            <div class="grid grid-cols-2 gap-6">
              <a
                routerLink="services/data-annotation"
                (click)="closeEverything()"
                class="p-4 rounded-xl hover:bg-neutral-50 transition-all group"
              >
                <h4
                  class="font-bold text-lg group-hover:text-accent  transition-colors"
                >
                  BPO Services
                </h4>
                <p
                  class="text-sm text-accent group-hover:text-primary font-semibold leading-relaxed"
                >
                  Precision Data Processing & Data Annotation
                </p>
              </a>
              <a
                routerLink="services/design-and-development"
                (click)="closeEverything()"
                class="p-4 rounded-xl hover:bg-neutral-50 transition-all group"
              >
                <h4
                  class="font-bold text-lg group-hover:text-accent transition-colors"
                >
                  Software Dev
                </h4>
                <p
                  class="text-sm text-accent group-hover:text-primary font-semibold leading-relaxed"
                >
                  Tech & Software Development Solutions
                </p>
              </a>
            </div>
          }

          @if (activeMenu === 'company') {
            <div class="grid grid-cols-2 gap-4">
              <a
                routerLink="about"
                (click)="closeEverything()"
                class="p-4 rounded-xl hover:bg-neutral-50 transition-all group"
              >
                <h4
                  class="font-bold text-lg group-hover:text-accent transition-colors"
                >
                  About Us
                </h4>
                <p
                  class="text-sm text-accent group-hover:text-primary font-semibold"
                >
                  What Drives Us
                </p>
              </a>
              <a
                routerLink="contact"
                (click)="closeEverything()"
                class="p-4 rounded-xl hover:bg-neutral-50 transition-all group"
              >
                <h4
                  class="font-bold text-lg group-hover:text-accent transition-colors"
                >
                  Contact Us
                </h4>
                <p
                  class="text-sm text-accent group-hover:text-primary font-semibold"
                >
                  Talk To Us
                </p>
              </a>
            </div>
          }
        </div>
      </div>
    }

    @if (isMobileMenuOpen) {
      <div
        class="lg:hidden fixed inset-0 top-16 bg-white z-40 p-6 overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        <nav class="flex flex-col space-y-4">
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
                  >Data Annotation</a
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
                  >Training Services</a
                >
              </div>
            }
          </div>

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
                  routerLink="partner"
                  (click)="closeEverything()"
                  class="text-lg text-neutral-600"
                  >Our Partners</a
                >
                <a
                  routerLink="success"
                  (click)="closeEverything()"
                  class="text-lg text-neutral-600"
                  >Success & Impact</a
                >
                <a
                  routerLink="programs"
                  (click)="closeEverything()"
                  class="text-lg text-neutral-600"
                  >Programs</a
                >
              </div>
            }
          </div>

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
                  routerLink="contact"
                  (click)="closeEverything()"
                  class="text-lg text-neutral-600"
                  >Contact Us</a
                >
              </div>
            }
          </div>

          <div class="pt-6">
            <a
              routerLink="/contact"
              (click)="closeEverything()"
              class="bg-accent block w-full text-center text-neutral-100 rounded-full font-semibold py-3"
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
  isMobileMenuOpen = false;
  mobileSub: string | null = null;

  toggleMenu(menuName: string) {
    this.activeMenu = this.activeMenu === menuName ? null : menuName;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) this.mobileSub = null;
  }

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
