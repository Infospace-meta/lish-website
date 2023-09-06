import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SharedModule } from '../shared/shared.module';  // Import SharedModule

// Components
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { TrainingComponent } from './components/pages/training/training.component';
import { PartnershipComponent } from './components/pages/partnership/partnership.component';

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
    PartnershipComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    SharedModule,  // SharedModule already contains ApplicationFormComponent
    FormsModule,
    ReactiveFormsModule  
  ]
})
export class CustomLayoutModule {}
