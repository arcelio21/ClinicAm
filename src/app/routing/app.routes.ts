import { Routes } from "@angular/router";
import { HomeComponent } from "../public/home/home/home.component";
import { HomeModule } from "../public/home/home.module";

export const ROUTES_APP:Routes = [
  {
    path:'',
    loadChildren: ()=> HomeModule
  }
];