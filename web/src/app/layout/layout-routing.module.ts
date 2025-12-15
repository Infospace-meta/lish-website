import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PartnershipComponent } from './components/pages/partnership/partnership.component';
import { TrainingComponent } from './components/pages/training/training.component';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { December2022Component } from './components/pages/blogpages/december2022/december2022.component';
import { August2023Component } from './components/pages/blogpages/august2023/august2023.component';
import { September2023Component } from './components/pages/blogpages/september2023/september2023.component';


const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      // {
      //   path: '',
      //   component: HomeComponent,
      // },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about_us',
        component: AboutUsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'blog/december2022',
        component: December2022Component,
      },
      {
        path: 'blog/august2023',
        component: August2023Component,
      },
      {
        path: 'blog/september2023',
        component: September2023Component,
      },

      {
        path: 'partnership',
        component: PartnershipComponent,
      },
      {
        path: 'training',
        component: TrainingComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home', //create 404 page
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
