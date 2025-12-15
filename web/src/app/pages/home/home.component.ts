import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { PartnersComponent } from '../../components/partners/partners.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    HeroComponent,
    ServicesComponent,
    GalleryComponent,
    PartnersComponent,
  ],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
