import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartflagComponent} from "./chartflag/chartflag.component";


const routes: Routes = [
  { path: 'chartflag', component: ChartflagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
