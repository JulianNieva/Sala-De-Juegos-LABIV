import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listado-resultados',
  templateUrl: './listado-resultados.component.html',
  styleUrls: ['./listado-resultados.component.scss']
})
export class ListadoResultadosComponent implements OnInit {

  resultadosJuegos: any[] = []
  cargado: boolean = false;
  usuario: any

  //datos globales del ahorcado
  ahorcadoVecesJugadas: number = 0
  ahorcadoVictorias: number = 0
  ahorcadoDerrotas: number = 0
  ahorcadoPuntuacionGlobal: number = 0

  //datos globales de mayor o menor
  mayorMenorVecesJugadas: number = 0
  mayorMenorVictorias: number = 0
  mayorMenorDerrotas: number = 0
  mayorMenorPuntuacionGlobal: number = 0

  //datos globales del preguntados
  preguntadosVecesJugadas: number = 0
  preguntadosVictorias: number = 0
  preguntadosDerrotas: number = 0
  preguntadosPuntuacionGlobal: number = 0

  //datos globales de aventura matematica
  aventuraMatVecesJugadas: number = 0
  aventuraMatVictorias: number = 0
  aventuraMatDerrotas: number = 0
  aventuraMatPuntuacionGlobal: number = 0

  //datos personales del ahorcado
  personalAhorcadoVecesJugadas: number = 0
  personalAhorcadoVictorias: number = 0
  personalAhorcadoDerrotas: number = 0
  personalAhorcadoPuntuacion: number = 0

  //datos personales de mayor o menor
  personalMayorMenorVecesJugadas: number = 0
  personalMayorMenorVictorias: number = 0
  personalMayorMenorDerrotas: number = 0
  personalMayorMenorPuntuacion: number = 0

  //datos personales del preguntados
  personalPreguntadosVecesJugadas: number = 0
  personalPreguntadosVictorias: number = 0
  personalPreguntadosDerrotas: number = 0
  personalPreguntadosPuntuacion: number = 0

  //datos personales de aventura matematica
  personalAventuraMatVecesJugadas: number = 0
  personalAventuraMatVictorias: number = 0
  personalAventuraMatDerrotas: number = 0
  personalAventuraMatPuntuacion: number = 0

  constructor(
    private firestoreService: FirestoreService,
    private userService: UserService) { }

  async ngOnInit() {
    await this.userService.user$.subscribe((user) => {
      if (user) {
        this.usuario = user
      }
    })

    this.firestoreService.traerColeccion('resultadosJuegos').subscribe((res: any) => {
      if (res != null) {
        for (const resultado of res) {
          this.resultadosJuegos.push(resultado)
        }
        this.CrearTablaGeneral()
        setTimeout(() => {
          this.CrearTablaPersonal()
        },400)
      }
    })
  }

  CrearTablaGeneral() {
    for (const unResultado of this.resultadosJuegos) {
      switch (unResultado.juego) {
        case "Preguntados":
          if (unResultado.victoria) {
            this.preguntadosVictorias += 1;
          }
          else {
            this.preguntadosDerrotas += 1;
          }
          this.preguntadosVecesJugadas = this.preguntadosDerrotas + this.preguntadosVictorias;
          this.preguntadosPuntuacionGlobal += unResultado.puntaje;
          break;
        case "MayorMenor":
          if (unResultado.victoria) {
            this.mayorMenorVictorias += 1;
          }
          else {
            this.mayorMenorDerrotas += 1;
          }
          this.mayorMenorVecesJugadas = this.mayorMenorDerrotas + this.mayorMenorVictorias;
          this.mayorMenorPuntuacionGlobal += unResultado.puntaje;
          break;
        case "Ahorcado":
          if (unResultado.victoria) {
            this.ahorcadoVictorias += 1;
          }
          else {
            this.ahorcadoDerrotas += 1;
          }
          this.ahorcadoVecesJugadas = this.ahorcadoDerrotas + this.ahorcadoVictorias;
          this.ahorcadoPuntuacionGlobal += unResultado.puntaje;
          break;
        default:
          if (unResultado.victoria) {
            this.aventuraMatVictorias += 1;
          }
          else {
            this.aventuraMatDerrotas += 1;
          }
          this.aventuraMatVecesJugadas = this.aventuraMatDerrotas + this.aventuraMatVictorias
          this.aventuraMatPuntuacionGlobal += unResultado.puntaje;
          break;
      }
    }
  }

  CrearTablaPersonal() {
    for (const unResultado of this.resultadosJuegos) {
      if (this.usuario.email === unResultado.usuario.email) {
        switch (unResultado.juego) {
          case "Preguntados":
            if (unResultado.victoria) {
              this.personalPreguntadosVictorias += 1;
            }
            else {
              this.personalPreguntadosDerrotas += 1;
            }
            this.personalPreguntadosVecesJugadas = this.personalPreguntadosDerrotas + this.personalPreguntadosVictorias;
            this.personalPreguntadosPuntuacion += unResultado.puntaje;
            break;
          case "MayorMenor":
            if (unResultado.victoria) {
              this.personalMayorMenorVictorias += 1;
            }
            else {
              this.personalMayorMenorDerrotas += 1;
            }
            this.personalMayorMenorVecesJugadas = this.personalMayorMenorDerrotas + this.personalMayorMenorVictorias;
            this.personalMayorMenorPuntuacion += unResultado.puntaje;
            break;
          case "Ahorcado":
            if (unResultado.victoria) {
              this.personalAhorcadoVictorias += 1;
            }
            else {
              this.personalAhorcadoDerrotas += 1;
            }
            this.personalAhorcadoVecesJugadas = this.personalAhorcadoDerrotas + this.personalAhorcadoVictorias;
            this.personalAhorcadoPuntuacion += unResultado.puntaje;
            break;
          default:
            if (unResultado.victoria) {
              this.personalAventuraMatVictorias += 1;
            }
            else {
              this.personalAventuraMatDerrotas += 1;
            }
            this.personalAventuraMatVecesJugadas = this.personalAventuraMatDerrotas + this.personalAventuraMatVictorias
            this.personalAventuraMatPuntuacion += unResultado.puntaje;
            break;
        }
      }
    }
  }
}
