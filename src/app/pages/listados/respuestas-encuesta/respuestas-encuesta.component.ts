import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-respuestas-encuesta',
  templateUrl: './respuestas-encuesta.component.html',
  styleUrls: ['./respuestas-encuesta.component.scss']
})
export class RespuestasEncuestaComponent {
  usuario: any = null;
  listaRespuestasEncuestas: any[] = [];

  constructor(private authService: UserService, private router: Router, private firestore:FirestoreService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.usuario = user;
        if (user.rolUsuario == 'admin') {
          this.authService.esAdmin = true;
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
    this.firestore.traerColeccion('encuestas').subscribe((res) => {
      if (res != null) {
        this.listaRespuestasEncuestas = res;
      }
    })
  }
}
