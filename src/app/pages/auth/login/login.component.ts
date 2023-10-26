import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { SwalService } from 'src/app/services/swal.service';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin: FormGroup
  usuario: any

  ngOnInit(): void {
    this.angularFireAuth.user$.subscribe((user: any) => {
      if (user) {
        this.router.navigate([''])
      }
    });
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private angularFireAuth: UserService, private swal: SwalService) {
    this.formLogin = this.formBuilder.group({
      clave: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  async Loguear() {
    const user = this.formLogin.value

    await this.angularFireAuth.Login(user).then(() => {
      this.angularFireAuth.user$.subscribe((user) => {
        if (user) {
          this.usuario = user;
          this.angularFireAuth.CrearLogUsuario(this.usuario).then(() => {
            this.swal.MostrarExito("¡Has iniciado sesión!", "Seras redirigido al inicio").then(() => {
              this.CargarForm(-1)
              this.router.navigate([''])
            })
          })
        }
      })
    }).catch(error => {
      this.swal.MostrarError("ERROR", this.angularFireAuth.ObtenerMensajeError(error.code))
      this.CargarForm(-1);
    })

  }

  CargarForm(user: number) {
    switch (user) {
      case -1:
        this.formLogin.reset()
        break;
      case 1:
        this.formLogin.patchValue({
          email: "admin@gmail.com",
          clave: "admin1234"
        })
        break;
      case 2:
        this.formLogin.patchValue({
          email: "invitado@gmail.com",
          clave: "invitado1234"
        })
        break;
    }
  }
}
