import { Routes } from '@angular/router';
import { TrainingComponent } from './layout/components/pages/training/training.component';
import { BlogComponent } from './layout/components/pages/blog/blog.component';
import { PartnershipComponent } from './layout/components/pages/partnership/partnership.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.CustomLayoutModule),
  },
  {
    path: 'training',
    component: TrainingComponent,
  },
  // {
  //   path: 'about_us',
  //   component: AboutUsComponent,
  // },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'partnership',
    component: PartnershipComponent,
  },
];
