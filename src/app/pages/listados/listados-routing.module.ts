import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoResultadosComponent } from './listado-resultados/listado-resultados.component';
import { RespuestasEncuestaComponent } from './respuestas-encuesta/respuestas-encuesta.component';
import { canActivateAdminGuard } from 'src/app/guards/can-activate-admin.guard';

const routes: Routes = [
  {
    path:'listado-resultados',
    component:ListadoResultadosComponent
  },
  {
    path:'listado-encuestas',
    component:RespuestasEncuestaComponent,
    canActivate:[canActivateAdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadosRoutingModule { }
