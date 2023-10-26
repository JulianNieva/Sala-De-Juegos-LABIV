import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadosRoutingModule } from './listados-routing.module';
import { ListadoResultadosComponent } from './listado-resultados/listado-resultados.component';


@NgModule({
  declarations: [
    ListadoResultadosComponent
  ],
  imports: [
    CommonModule,
    ListadosRoutingModule
  ]
})
export class ListadosModule { }
