import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './../../signin/signin.component';
import { SignupComponent } from '../../signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  exports: []
})
export class AuthModuleModule {}
