import {Routes} from "@angular/router";
import {ChoiceTypeUserComponent} from "../components/choice-type-user/choice-type-user.component";
import {authUserGuard} from "../../../guards/auth-user.guard";

export const routes:Routes = [
  {
    path:'',
    component:ChoiceTypeUserComponent,
    title:'Choice User',
    canActivate:[authUserGuard]
  }
];