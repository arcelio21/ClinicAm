import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/Register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { SectionRegisterPrimaryComponent } from './components/section-register-primary/section-register-primary.component';
import { SectionRegisterSecondaryComponent } from './components/section-register-secondary/section-register-secondary.component';
import { SectionRegisterTertiaryComponent } from './components/section-register-tertiary/section-register-tertiary.component';
import { AddressService } from './service/address/Address.service';
import {RegisterUserService} from "./service/register/register-user.service";
import { IdentificationCardPipe} from './pipes/identification-card.pipe';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [
    RegisterComponent,
    FormRegisterComponent,
    SectionRegisterPrimaryComponent,
    SectionRegisterSecondaryComponent,
    SectionRegisterTertiaryComponent,
    IdentificationCardPipe
  ],
  providers:[AddressService,RegisterUserService]
})
export class RegisterModule {}
