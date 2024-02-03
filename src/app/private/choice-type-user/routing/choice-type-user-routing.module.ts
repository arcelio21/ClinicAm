import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {routes} from "./choice-type-user.route";



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ChoiceTypeUserRoutingModule { }
