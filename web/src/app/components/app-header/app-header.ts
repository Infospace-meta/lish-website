import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavChild {
  label: string;
  link: string;
  description: string;
}

interface NavItem {
  id: string;
  label: string;
  children: NavChild[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <!-- Header Container -->
    <div class="relative max-w-7xl mx-auto flex w-full xl:py-14 justify-between items-center h-16 bg-transparent text-neutral-700 px-4 top-0 left-0 right-0 z-50 max-md:sticky max-md:bg-white">
      
      <!-- Logo -->
      <div>
        <a routerLink="/home" (click)="closeEverything()">
          <img src="https://res.cloudinary.com/dpfcle0os/image/upload/v1706977858/samples/Lish-website/lish-logo_jhm8ac.png"
               class="h-auto lg:w-20 w-16 rounded-sm" alt="Lish Logo" />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center bg-neutral-200/60 rounded-full px-1 py-1 relative shadow-sm">
        @for (item of navConfig; track item.id) {
          <div (click)="toggleMenu(item.id)"
               [ngClass]="activeMenu === item.id ? 'bg-accent text-white shadow-lg scale-105' : 'text-neutral-600 hover:text-accent'"
               class="px-5 py-2 cursor-pointer rounded-full font-semibold transition-all duration-500 flex items-center gap-1 group">
            <span>{{ item.label }}</span>
            <span class="material-symbols-outlined text-[18px] transition-transform duration-300"
                  [ngClass]="{ 'rotate-180': activeMenu === item.id }">expand_more</span>
          </div>
        }
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center space-x-4 p-1">
        <a routerLink="/contact" (click)="closeEverything()"
           class="hidden md:block px-6 py-2.5 bg-accent text-neutral-100 rounded-full hover:bg-complement transition-all duration-300 font-semibold shadow-lg hover:shadow-accent/20">
          Contact Us
        </a>

        <!-- Mobile Toggle -->
        <button (click)="toggleMobileMenu()" type="button" class="lg:hidden p-2 text-neutral-700 focus:outline-none">
          @if (!isMobileMenuOpen) {
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          } @else {
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          }
        </button>
      </div>
    </div>

    <!-- Desktop Mega Menu Dropdown -->
    @if (activeMenu) {
      <div class="fixed inset-0 z-30" (click)="closeMenu()"></div>
      <div class="hidden lg:block absolute xl:left-1/2 xl:-translate-x-1/2 md:left-1/2 md:-translate-x-1/2 xl:w-[45%] w-[70%] bg-white shadow-xl rounded-xl border border-neutral-100 animate-mega-in z-40">
        <div class="p-10">
          @for (item of navConfig; track item.id) {
            @if (activeMenu === item.id) {
              <div class="grid grid-cols-2 gap-6">
                @for (child of item.children; track child.link) {
                  <a [routerLink]="child.link" (click)="closeEverything()" class="p-4 rounded-lg transition-all group">
                    <p class="group-hover:text-accent transition-colors">{{ child.label }}</p>
                    <h5 class="text-sm text-neutral-600 group-hover:text-primary font-semibold leading-relaxed">{{ child.description }}</h5>
                  </a>
                }
              </div>
            }
          }
        </div>
      </div>
    }

    <!-- Mobile Menu Overlay -->
    @if (isMobileMenuOpen) {
      <div class="lg:hidden fixed inset-0 top-16 bg-white z-40 p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
        <nav class="flex flex-col space-y-4">
          @for (item of navConfig; track item.id) {
            <div>
              <button (click)="toggleMobileSub(item.id)" class="w-full flex justify-between items-center text-lg font-semibold py-2 border-b border-neutral-100 capitalize">
                {{ item.label }} <span>{{ mobileSub === item.id ? '−' : '+' }}</span>
              </button>
              @if (mobileSub === item.id) {
                <div class="pl-4 py-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
                  @for (child of item.children; track child.link) {
                    <a [routerLink]="child.link" (click)="closeEverything()" class="text-lg text-neutral-600">{{ child.label }}</a>
                  }
                </div>
              }
            </div>
          }
          <div class="pt-6">
            <a routerLink="/contact" (click)="closeEverything()" class="bg-accent block w-full text-center text-neutral-100 rounded-full font-semibold py-3">Contact Us</a>
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

  // Single source of truth for navigation
  readonly navConfig: NavItem[] = [
    {
      id: 'services',
      label: 'services',
      children: [
        { label: 'BPO Services', link: 'services/bpo-services', description: 'Precision Data Processing & Data Annotation' },
        { label: 'Software Dev', link: 'services/tech-services', description: 'Tech & Software Development Solutions' },
      ]
    },
    {
      id: 'impact',
      label: 'impact',
      children: [
        { label: 'Our Partners', link: 'partner', description: 'Strategic Partnerships' },
        { label: 'Success & Impact', link: 'success', description: 'Real Results, Real Impact' },
      ]
    },
    {
      id: 'company',
      label: 'company',
      children: [
        { label: 'About Us', link: 'about', description: 'What Drives Us' },
        { label: 'Contact Us', link: 'contact', description: 'Talk To Us' }
      ]
    }
  ];

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

