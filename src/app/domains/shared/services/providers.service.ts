import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, map } from 'rxjs';
import { Provider } from '@models/index';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  private readonly apiUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() { }

  getProviders(): Observable<Provider[]> {
    const url = `${this.apiUrl}/api/providers`;
    return this.http.get<Provider[]>(url);
  }

  getProvider(id: string): Observable<Provider> {
    const url = `${this.apiUrl}/api/providers/${id}`;
    return this.http.get<Provider>(url)
      .pipe(
        map(provider => {
          provider.rating = Number(provider.rating)
          return provider;
        })
      );
  }

  getProvidersByServiceId(serviceId: string): Observable<Provider[]> {
    const url = `${this.apiUrl}/api/providers/service/${serviceId}`;
    return this.http.get<Provider[]>(url);
  }

}
