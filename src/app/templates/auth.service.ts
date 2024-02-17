import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { LoginResponse, RefreshTokenResponse } from '@auth/interfaces';
import { AuthStatus } from '@enums/index';
import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //! Para toda la aplicación
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);

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

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.apiUrl}/api/auth/refresh-token`;
    const token = localStorage.getItem('token');

    if (!token) {
      this.logout();
      return of(false);
    };

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<RefreshTokenResponse>(url, {}, { headers })
      .pipe(
        map(({ user, token }) => {
          // console.log({ user, token });
          return this.setAuthentication(user, token);
        }),
        catchError( err => {
          this._authStatus.set(AuthStatus.notAuthenticated);
          console.log({ err });
          return of(false);
        })
      )
  }

  logout() {
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
    localStorage.removeItem('token');
  }
}
