import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  template: `
    <div
      class="flex lg:px-30 lg:py-7 justify-between items-center bg-white text-neutral-700 p-5 top-0 left-0 right-0 z-100 max-lg:sticky"
    >
      <div>
        <a routerLink="/home">
          <img
            src="https://res.cloudinary.com/dpfcle0os/image/upload/v1706977858/samples/Lish-website/lish-logo_jhm8ac.png"
            class="h-auto lg:w-20 w-16 rounded-sm"
            alt="Lish Logo"
          />
        </a>
      </div>
      <nav
        class=" hidden lg:flex  space-x-1 rounded-full p-1 bg-neutral-200/50"
      >
        <a
          routerLink="/home"
          (click)="toggleHeader()"
          class="px-4 py-1 bg-neutral-200/10 text-neutral-600 rounded-full hover:text-blue-700 font-semibold"
        >
          Home
        </a>
        <a
          routerLink="/about_us"
          class="px-4 py-1 bg-neutral-200/10 text-neutral-600 rounded-full hover:text-blue-700 font-semibold"
        >
          About
        </a>
        <a
          routerLink="/impact"
          class="px-4 py-1 bg-neutral-200/10 text-neutral-600 rounded-full hover:text-blue-700 font-semibold"
        >
          Impact
        </a>
        <a
          routerLink="/services"
          class="px-4 py-1 bg-neutral-200/10 text-neutral-600 rounded-full hover:text-blue-700 font-semibold"
        >
          Services
        </a>
      </nav>
      <div class="flex items-center space-x-2">
        <a
          routerLink="/contact"
          class="px-4 py-2 bg-neutral-800 text-neutral-100 rounded-full font-semibold hover:bg-blue-700 hover:transition hover:ease-in-out hover:duration-700 hover:transform hover:translate-y-1"
        >
          Contact Us
        </a>
        <button
          (click)="toggleHeader()"
          type="button"
          class="inline-flex items-center text-gray-700 rounded-lg lg:hidden p-2"
          aria-expanded="false"
        >
          <span class="material-symbols-sharp"> menu </span>
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
