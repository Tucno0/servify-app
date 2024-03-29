import { Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string): void {
    // localStorage.setItem('token', token);
    setCookie('token', token, { expires:  7, path: '/' });
  }

  getToken(): string | undefined {
    // return localStorage.getItem('token');
    return getCookie('token');
  }

  removeToken(): void {
    // localStorage.removeItem('token');
    removeCookie('token');
  }

}
