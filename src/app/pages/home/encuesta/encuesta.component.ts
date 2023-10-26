import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalService } from 'src/app/services/swal.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {
  //@ts-ignore
  formEncuesta: FormGroup;
  usuario: any;
  //@ts-ignore
  nuevaCategoria:string | boolean;


  constructor(
    private userService: UserService,
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
    private swal: SwalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nuevaCategoria = false;
    this.userService.user$.subscribe((user: any) => {
      if (user) {
        this.usuario = user;
      } else {
        this.router.navigate(['/login']);
      }
    });

    this.formEncuesta = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono: ['',[Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      nuevaCategoriaPuzzle: [true],
      nuevaCategoriaSimuladores: [false],
      nuevaCategoriaEstrategia: [false],
      nuevaCategoriaMultijugador: [false],
      juegoFavorito:['ahorcado'],
      comentario:['',[Validators.required,Validators.minLength(3),Validators.maxLength(200)]],
    });
  }

  EnviarEncuesta() {
    if (this.formEncuesta.valid) {
      if (this.ValidarCategoriaJuegos()) {
        this.GuardarEncuesta();
        this.formEncuesta.reset({
          nombre: '',
          apellido: '',
          edad: '',
          telefono: '',
          nuevoJuegoTateti: true,
          nuevoJuegoMemotest: false,
          nuevoJuegoPPT: false,
          juegoFavorito: 'ahorcado',
          comentario: '',
        });
      } else {
        this.MostrarMensajeValidacionJuegos();
        this.swal.MostrarError("ERROR","¡Asegurese de completar todos los campos!");
      }
    } else {
      this.MostrarMensajeValidacionJuegos();
      this.swal.MostrarError("ERROR","¡Asegurese de completar todos los campos!");
    }
  }

  MostrarMensajeValidacionJuegos() {
    const puzzle = this.formEncuesta.value.nuevaCategoriaPuzzle;
    const simulador = this.formEncuesta.value.nuevaCategoriaSimuladores;
    const estrategia = this.formEncuesta.value.nuevaCategoriaEstrategia;
    const multijugador = this.formEncuesta.value.nuevaCategoriaMultijugador;

    if (!puzzle && !simulador && !estrategia && !multijugador) {
      this.nuevaCategoria = 'Se debe elegir al menos una opción';
    } else {
      this.nuevaCategoria = false;
    }
  }

  ValidarCategoriaJuegos(): boolean {
    const puzzle = this.formEncuesta.value.nuevaCategoriaPuzzle;
    const simulador = this.formEncuesta.value.nuevaCategoriaSimuladores;
    const estrategia = this.formEncuesta.value.nuevaCategoriaEstrategia;
    const multijugador = this.formEncuesta.value.nuevaCategoriaMultijugador;

    if (!puzzle && !simulador && !estrategia && !multijugador) {
      return false;
    }
    return true;
  }

  GuardarEncuesta() {
    const encuesta = {
      usuario: this.usuario,
      fecha: moment(new Date()).format('DD-MM-YYYY HH:mm:ss'),
      encuesta: this.formEncuesta.value,
    };

    console.info(encuesta)

    this.firestore.guardarEncuesta(encuesta).then(() => {
      this.swal.MostrarExito("¡EXITO!","¡Gracias por responder la encuesta!")
    }).catch(() => {
      this.swal.MostrarError("¡ERROR!","Ocurrio un error")
    })
  }

  ReiniciarForm()
  {
    this.formEncuesta.reset({
      nombre: '',
      apellido: '',
      edad: '',
      telefono: '',
      juegoFavorito: 'ahorcado',
      recomiendaPagina: '',
    });
  }
}