import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Required for @if/ngIf if not using latest control flow

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <!-- Main Header Wrapper -->
    <!-- (mouseleave) ensures the sub-nav closes when moving the mouse away from the header area -->
    <div
      (mouseleave)="closeMenu()"
      class="relative flex xl:px-30 xl:py-14 justify-between items-center h-16 bg-white text-neutral-700 px-4 top-0 left-0 right-0 z-50 sticky shadow-sm"
    >
      <!-- Logo -->
      <div>
        <a routerLink="/home" (mouseenter)="closeMenu()">
          <img
            src="https://res.cloudinary.com/dpfcle0os/image/upload/v1706977858/samples/Lish-website/lish-logo_jhm8ac.png"
            class="h-auto lg:w-20 w-16 rounded-sm"
            alt="Lish Logo"
          />
        </a>
      </div>

      <!-- Main Navigation Pill -->
      <nav class="flex space-x-1 rounded-full p-1 bg-neutral-200 relative">
        <a
          routerLink="/home"
          (mouseenter)="closeMenu()"
          class="px-4 py-1 text-neutral-600 rounded-full hover:text-blue-700 font-semibold transition-colors"
        >
          Home
        </a>

        <!-- Impact Trigger -->
        <div
          (mouseenter)="openMenu('impact')"
          [class.text-blue-700]="activeMenu === 'impact'"
          class="px-4 py-1 cursor-pointer text-neutral-600 rounded-full hover:text-blue-700 font-semibold transition-colors"
        >
          Impact
        </div>

        <!-- Services Trigger -->
        <div
          (mouseenter)="openMenu('services')"
          [class.text-blue-700]="activeMenu === 'services'"
          class="px-4 py-1 cursor-pointer text-neutral-600 rounded-full hover:text-blue-700 font-semibold transition-colors"
        >
          Services
        </div>
      </nav>

      <!-- Right Side Actions -->
      <div class="flex items-center space-x-4 p-1">
        <a
          routerLink="/contact"
          (mouseenter)="closeMenu()"
          class="px-4 py-2 bg-blue-800 text-neutral-100 rounded-full hover:bg-blue-900 transition-colors font-semibold"
        >
          Contact Us
        </a>

        <!-- Mobile Toggle -->
        <button
          (click)="toggleHeader()"
          type="button"
          class="inline-flex items-center text-gray-700 rounded-lg lg:hidden"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#434343"
          >
            <path
              d="M120-693.33V-760h720v66.67H120ZM120-200v-66.67h720V-200H120Zm0-246.67v-66.66h720v66.66H120Z"
            />
          </svg>
        </button>
      </div>

      <!-- FIXED SUB-NAV PANEL -->
      <!-- Positioned absolute to the top header container, spans full width -->
      @if (activeMenu) {
        <div
          class="absolute top-[130px] left-[25%] right-[25%] bg-white border-b border-gray-100  rounded-[1rem] shadow-2xl animate-in slide-in-from-top-2 duration-200 z-40"
        >
          <div class="max-w-screen-xl mx-auto px-10 py-10">
            <!-- Content for Impact -->
            @if (activeMenu === 'impact') {
              <div class="grid grid-cols-3 gap-10">
                <div class="col-span-1">
                  <h3 class="text-xl font-bold text-blue-800 mb-2">
                    Our Impact
                  </h3>
                  <p class="text-sm text-neutral-500">
                    Discover how we are changing lives through sustainable
                    development and innovation.
                  </p>
                </div>
                <div class="flex flex-col space-y-3">
                  <a
                    routerLink="/impact/education"
                    class="font-semibold hover:text-blue-700"
                    >Education Support</a
                  >
                  <a
                    routerLink="/impact/health"
                    class="font-semibold hover:text-blue-700"
                    >Health Initiatives</a
                  >
                </div>
                <div class="flex flex-col space-y-3">
                  <a
                    routerLink="/impact/sustainability"
                    class="font-semibold hover:text-blue-700"
                    >Sustainability</a
                  >
                  <a
                    routerLink="/impact/reports"
                    class="font-semibold hover:text-blue-700"
                    >Annual Reports</a
                  >
                </div>
              </div>
            }

            <!-- Content for Services -->
            @if (activeMenu === 'services') {
              <div class="grid grid-cols-4 gap-6">
                <div
                  class="p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <a routerLink="/services/tech" class="block">
                    <h4 class="font-bold group-hover:text-blue-700">
                      Technology
                    </h4>
                    <p class="text-xs text-neutral-500">
                      Custom software and infrastructure.
                    </p>
                  </a>
                </div>
                <div
                  class="p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <a routerLink="/services/consulting" class="block">
                    <h4 class="font-bold group-hover:text-blue-700">
                      Consulting
                    </h4>
                    <p class="text-xs text-neutral-500">
                      Strategy and business growth.
                    </p>
                  </a>
                </div>
                <div
                  class="p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <a routerLink="/services/design" class="block">
                    <h4 class="font-bold group-hover:text-blue-700">
                      UI/UX Design
                    </h4>
                    <p class="text-xs text-neutral-500">
                      Creative and user-centric design.
                    </p>
                  </a>
                </div>
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
})
export class AppHeader {
  activeMenu: string | null = null;

  toggleHeader() {
    // Note: You can also use a boolean variable for mobile menu instead of direct DOM manipulation
    document.getElementById('navbar-sticky')?.classList.toggle('hidden');
  }

  openMenu(menuName: string) {
    this.activeMenu = menuName;
  }

  closeMenu() {
    this.activeMenu = null;
  }
}
