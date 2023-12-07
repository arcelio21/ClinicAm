import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonRedirectComponent } from './button-redirect/button-redirect.component';
import { RouterModule } from '@angular/router';
import { HeaderHomeComponent } from './header-home/header-home.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ButtonRedirectComponent,
    HeaderHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ButtonComponent,ButtonRedirectComponent,HeaderHomeComponent]
})
export class SharedModule { }
