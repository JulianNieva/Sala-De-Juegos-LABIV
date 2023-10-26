import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EncuestaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
