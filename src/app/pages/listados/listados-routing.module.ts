import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoResultadosComponent } from './listado-resultados/listado-resultados.component';

const routes: Routes = [
  {
    path:'listado-resultados',
    component:ListadoResultadosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadosRoutingModule { }
