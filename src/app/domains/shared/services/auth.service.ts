import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { LoginResponse, RefreshTokenResponse, RegisterResponse } from '@auth/interfaces';
import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl: string = environment.apiUrl;

  private http = inject(HttpClient);
  private router = inject(Router);
  private tokenService = inject(TokenService);

  private _currentUser = signal<User | null>(null);

  //! Para toda la aplicación
  public currentUser = computed(() => this._currentUser());

  constructor() {
    // this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this.tokenService.saveToken(token);

    return true;
  }

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.apiUrl}/api/auth/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(({ user, token }) => {
          // console.log({ user, token });
          return this.setAuthentication(user, token);
        }),
        catchError( err => {
          console.log({ err });
          return throwError(() => 'Error en el login');
        })
      )
  }

  register(email: string, name: string, lastName: string, password: string): Observable<boolean> {
    const url = `${this.apiUrl}/api/auth/register`;
    const body = { email, name, lastName, password };

    return this.http.post<RegisterResponse>(url, body)
      .pipe(
        map(({ user, token }) => {
          // console.log({ user, token });
          return this.setAuthentication(user, token);
        }),
        catchError( err => {
          console.log({ err });
          return throwError(() => 'Error en el registro');
        })
      )
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.apiUrl}/api/auth/refresh-token`;
    const token = this.tokenService.getToken();

    if (!token) {
      this.logout();
      return of(false);
    };

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<RefreshTokenResponse>(url, {}, { headers })
      .pipe(
        map(({ user, token }) => {
          // console.log({ user, token });
          // console.log('Paso por el checkAuthStatus');
          return this.setAuthentication(user, token);
        }),
        catchError( err => {
          console.log({ err });
          if (err.status === 401) {
            this.logout();
          }
          return of(false);
        })
      )
  }

  logout() {
    this._currentUser.set(null);
    this.tokenService.removeToken();
    this.router.navigate(['']);
  }

  validateEmail(token: string): Observable<{ message: string }> {
    const url = `${this.apiUrl}/api/auth/validate-email/${token}`;
    return this.http.get<{ message: string }>(url);
  }

  isEmailAvalible(email: string): Observable<{ isAvailable: boolean }> {
    const url = `${this.apiUrl}/api/auth/is-email-available`;
    const body = { email };

    return this.http.post<{ isAvailable: boolean }>(url, body);
  }

  recovery(email: string) {
    const url = `${this.apiUrl}/api/auth/recovery`;
    const body = { email };

    return this.http.post(url, body);
  }

  changePassword( token: string, newPassword: string): Observable<{ message: string }> {
    const url = `${this.apiUrl}/api/auth/change-password`;
    const body = { token, newPassword };

    return this.http.post<{ message: string }>(url, body);
  }
}
