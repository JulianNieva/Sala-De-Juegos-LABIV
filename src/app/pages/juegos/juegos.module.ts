import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { AventuramatematicaComponent } from './aventuramatematica/aventuramatematica.component';

@NgModule({
  declarations: [
    AhorcadoComponent,
    MenuJuegosComponent,
    MayorMenorComponent,
    PreguntadosComponent,
    AventuramatematicaComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
  ],
})
export class JuegosModule { }
