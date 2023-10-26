import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { SwalService } from '../services/swal.service';

export const canActivateAdminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const swal = inject(SwalService)
  const { user$ } = userService;

  return user$.pipe(
    take(1), 
    map((user) => {
      if (user && user.rol === 'Admin') {
        return true; 
      } else {
        swal.MostrarError("ERROR","¡Solo el Administrador puede ingresar!")
        return false; 
      }
    })
  );
};
