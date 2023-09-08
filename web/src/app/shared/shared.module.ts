import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { ApplicationFormComponent } from '../layout/components/pages/application-form/application-form.component';

@NgModule({
  declarations: [
    ApplicationFormComponent,  
  ],
  exports: [
    ApplicationFormComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,  
  ],
})
export class SharedModule { }
