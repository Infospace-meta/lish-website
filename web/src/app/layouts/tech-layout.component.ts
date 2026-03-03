import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tech-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <div class="tech-wrapper">
    <nav>Tech Dept Navbar (Deep Dive Mode)</nav>
    <aside>Specialized Tech Sidebar</aside>
    <main>
      <router-outlet></router-outlet>
      <!-- Children routes render here -->
    </main>
    <footer>Tech Specs Footer</footer>
  </div>`,
  styles: [
    `
      .tech-wrapper {
        background: #1a1a1a;
        color: #00ff00;
      }
    `,
  ],
})
export class TechLayoutComponent {}
