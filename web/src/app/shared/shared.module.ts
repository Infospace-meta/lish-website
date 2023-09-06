import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Make sure to import this
import { FormsModule } from '@angular/forms';  // FormsModule for ngModel
import { ApplicationFormComponent } from '../layout/components/application-form/application-form.component';

@NgModule({
  declarations: [
    ApplicationFormComponent,  // Keep this line
  ],
  exports: [
    ApplicationFormComponent,
  ],
  imports: [
    CommonModule,  // Import CommonModule here
    FormsModule,  // Import FormsModule
  ],
})
export class SharedModule { }
