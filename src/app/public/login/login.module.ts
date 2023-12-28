import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormImgLoginComponent } from './form-img-login/form-img-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './state/login.reducers';
import { AuthService } from './service/Auth.service';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './state/Login.effects';



@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    FormImgLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('LoginState',loginReducer),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers:[
    AuthService,
  ]
})
export class LoginModule { }
