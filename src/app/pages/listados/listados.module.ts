import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadosRoutingModule } from './listados-routing.module';
import { ListadoResultadosComponent } from './listado-resultados/listado-resultados.component';
import { RespuestasEncuestaComponent } from './respuestas-encuesta/respuestas-encuesta.component';


@NgModule({
  declarations: [
    ListadoResultadosComponent,
    RespuestasEncuestaComponent
  ],
  imports: [
    CommonModule,
    ListadosRoutingModule
  ]
})
export class ListadosModule { }
