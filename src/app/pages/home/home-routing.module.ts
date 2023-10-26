import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EncuestaComponent } from './encuesta/encuesta.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:'aboutme',
    component:AboutmeComponent
  },
  {
    path:'encuesta',
    component:EncuestaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
