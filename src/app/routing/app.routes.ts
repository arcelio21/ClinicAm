import { Routes } from "@angular/router";
import { HomeComponent } from "../public/home/home/home.component";

export const ROUTES_APP:Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    component:HomeComponent,
    title:"Home",
    path:'home'
  }
];