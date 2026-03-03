import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { December2022Component } from './pages/blogpages/december2022/december2022.component';
import { August2023Component } from './pages/blogpages/august2023/august2023.component';
import { September2023Component } from './pages/blogpages/september2023/september2023.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { TrainingComponent } from './pages/training/training.component';
import { AppLayoutComponent } from './layouts/app.component';
import { TechLayoutComponent } from './layouts/tech-layout.component';
import { TechLandingPage } from './pages/tech/tech-landing-page/tech-landing-page';

// export const routes: Routes = [
//   {
//     path: 'home',
//     component: HomeComponent,
//   },
//   {
//     path: 'about_us',
//     component: AboutUsComponent,
//   },
//   {
//     path: 'contact',
//     component: ContactComponent,
//   },
//   {
//     path: 'blog',
//     component: BlogComponent,
//   },
//   {
//     path: 'blog/december2022',
//     component: December2022Component,
//   },
//   {
//     path: 'blog/august2023',
//     component: August2023Component,
//   },
//   {
//     path: 'blog/september2023',
//     component: September2023Component,
//   },

//   {
//     path: 'partnership',
//     component: PartnershipComponent,
//   },
//   {
//     path: 'training',
//     component: TrainingComponent,
//   },
//   {
//     path: 'training',
//     component: TrainingComponent,
//   },
//   // {
//   //   path: 'about_us',
//   //   component: AboutUsComponent,
//   // },
//   {
//     path: 'blog',
//     component: BlogComponent,
//   },
//   {
//     path: 'partnership',
//     component: PartnershipComponent,
//   },
//   { path: '**', redirectTo: 'home' } /**Add 404 page */,
// ];

export const routes: Routes = [
  /**1. STANDARD ROUTES (Main Layout) */
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about_us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog/december2022', component: December2022Component },
      { path: 'partnership', component: PartnershipComponent },
      { path: 'training', component: TrainingComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  /**2. TECH ROUTES (Tech Layout) */
  {
    path: 'tech',
    component: TechLayoutComponent,
    children: [
      { path: '', component: TechLandingPage },
      { path: 'home', component: HomeComponent },
      { path: 'about_us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },

  /**3. WILDCARD (Outside of layouts or inside Main) */
  { path: '**', redirectTo: 'home' },
];
