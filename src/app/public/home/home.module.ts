import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './routing/home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { LoginModule } from '../login/login.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    LoginModule
  ]
})
export class HomeModule { }
