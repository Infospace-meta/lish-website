import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './layout/components/pages/training/training.component'; // Import your training component
import { BlogComponent } from './layout/components/pages/blog/blog.component'; //import your blog component
import { PartnershipComponent } from './layout/components/pages/partnership/partnership.component'; //import your partnership component
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.CustomLayoutModule),
  },
  {
    path: 'training',
    component: TrainingComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'partnership',
    component: PartnershipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
