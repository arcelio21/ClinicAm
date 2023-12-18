import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormImgLoginComponent } from './form-img-login/form-img-login.component';
import { SectionFieldComponent } from '../../shared/section-field/section-field.component';



@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    FormImgLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LoginModule { }
