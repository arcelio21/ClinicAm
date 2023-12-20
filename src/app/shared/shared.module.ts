import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonRedirectComponent } from './button-redirect/button-redirect.component';
import { RouterModule } from '@angular/router';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { SectionFieldComponent } from './section-field/section-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageInputComponent } from './MessageInput/MessageInput.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ButtonRedirectComponent,
    HeaderHomeComponent,
    SectionFieldComponent,
    MessageInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [ButtonComponent,ButtonRedirectComponent,HeaderHomeComponent,SectionFieldComponent]
})
export class SharedModule { }
