import { Routes } from "@angular/router";
import { HomeModule } from "../public/home/home.module";

export const ROUTES_APP:Routes = [
  {
    path:'',
    loadChildren: ()=> HomeModule
  },
  {
    path:'selectUser',
    loadChildren:()=> import('../private/choice-type-user/choice-type-user.module').then(m=> m.ChoiceTypeUserModule),
    canActivate:[]
  }
];