import { Routes } from "@angular/router";
import { HomeModule } from "../public/home/home.module";

export const ROUTES_APP:Routes = [
  {
    path:'',
    loadChildren: ()=> HomeModule
  }
];