import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonRedirectComponent } from './button-redirect/button-redirect.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonComponent,
    ButtonRedirectComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ButtonComponent,ButtonRedirectComponent]
})
export class SharedModule { }
