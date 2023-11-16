import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_APP } from './app.routes';


@NgModule({
  imports: [RouterModule.forRoot(ROUTES_APP)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
