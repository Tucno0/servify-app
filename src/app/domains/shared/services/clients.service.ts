import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private readonly apiUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() { }

  getClients(): Observable<Client[]> {
    const url = `${this.apiUrl}/api/clients`;
    return this.http.get<Client[]>(url);
  }

  getClient(id: string): Observable<Client> {
    const url = `${this.apiUrl}/api/clients/${id}`;
    return this.http.get<Client>(url);
  }

  getClientByUserId(userId: string): Observable<Client> {
    const url = `${this.apiUrl}/api/clients/user/${userId}`;
    return this.http.get<Client>(url);
  }
}
