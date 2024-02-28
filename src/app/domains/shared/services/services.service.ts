import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Service } from '@models/service.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private readonly apiUrl: string = environment.apiUrl;

  private http = inject(HttpClient);

  constructor() { }

  getServices(): Observable<Service[]> {
    const url = `${this.apiUrl}/api/services`;
    return this.http.get<Service[]>(url);
  }

  getService(id: string): Observable<Service> {
    const url = `${this.apiUrl}/api/services/${id}`;
    return this.http.get<Service>(url);
  }

}
