import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { TrainingComponent } from './components/pages/training/training.component';
import { PartnershipComponent } from './components/pages/partnership/partnership.component';
import { December2022Component } from './components/pages/blogpages/december2022/december2022.component';
import { August2023Component } from './components/pages/blogpages/august2023/august2023.component';
import { September2023Component } from './components/pages/blogpages/september2023/september2023.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from '../components/services/services.component';
import { PartnersComponent } from '../components/partners/partners.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    WrapperComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    BlogComponent,
    TrainingComponent,
    PartnershipComponent,
    December2022Component,
    August2023Component,
    September2023Component,
    HeroComponent,
    ServicesComponent,
    PartnersComponent,
    GalleryComponent,
  ],
  imports: [CommonModule, RouterModule, LayoutRoutingModule],
})
export class CustomLayoutModule {}
