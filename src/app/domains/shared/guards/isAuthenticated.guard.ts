import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  // const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const token = tokenService.getToken();
  const url = state.url;

  if (!token) {
    // console.log('Autenticado');
    localStorage.setItem('url', url);

    console.log('No autenticado');
    router.navigate(['']);
    return false;
  }

  // authService.checkAuthStatus().subscribe();
  console.log( 'Autenticado' );
  return true;
};
