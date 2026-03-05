import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  template: `
    <div
      class="flex xl:px-30 xl:py-14 justify-between items-center h-16 bg-white text-neutral-700 px-4 top-0 left-0 right-0 z-10 sticky"
    >
      <div>
        <a routerLink="/home">
          <img
            src="https://res.cloudinary.com/dpfcle0os/image/upload/v1706977858/samples/Lish-website/lish-logo_jhm8ac.png"
            class="h-auto w-20 rounded-sm"
            alt="Lish Logo"
          />
        </a>
      </div>
      <nav class="flex space-x-1 rounded-full p-1 bg-neutral-200">
        <a
          routerLink="/home"
          (click)="toggleHeader()"
          class="px-4 py-1 bg-neutral-200 text-neutral-600 rounded-full hover:text-blue-700 font-semibold"
        >
          Home
        </a>
        <a
          routerLink="/about_us"
          class="px-4 py-1 bg-neutral-200 text-neutral-600 rounded-full hover:text-blue-700 font-semibold"
        >
          About
        </a>
        <a
          routerLink="/impact"
          class="px-4 py-1 bg-neutral-200 text-neutral-600 rounded-full hover:text-blue-700 font-semibold"
        >
          Impact
        </a>
        <a
          routerLink="/services"
          class="px-4 py-1 bg-neutral-200 text-neutral-600 rounded-full hover:text-blue-700 font-semibold"
        >
          Services
        </a>
      </nav>
      <div class="flex items-center space-x-4 p-1">
        <a
          routerLink="/contact"
          class="px-4 py-2 bg-blue-800 text-neutral-100 rounded-full hover:text-blue-700 font-semibold"
        >
          Contact Us
        </a>
        <button
          (click)="toggleHeader()"
          type="button"
          class="inline-flex items-center p-2 text-sm rounded-lg md:hidden ring-2 ring-gray-700 focus:outline-none focus:ring-2 hover:bg-gray-700 "
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6 fill-gray-300 focus:fill-gray-100"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  `,
})
export class AppHeader {
  toggleHeader() {
    document.getElementById('navbar-sticky')?.classList.toggle('hidden');
  }
}
