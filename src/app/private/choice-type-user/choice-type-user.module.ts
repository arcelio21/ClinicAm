import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceTypeUserComponent } from './components/choice-type-user/choice-type-user.component';
import {ChoiceTypeUserRoutingModule} from "./routing/choice-type-user-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ChoiceTypeUserComponent
  ],
  imports: [
    CommonModule,
    ChoiceTypeUserRoutingModule,
    SharedModule
  ]
})
export class ChoiceTypeUserModule {}
