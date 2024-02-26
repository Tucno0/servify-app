import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private readonly apiUrl: string = environment.apiUrl;

  private http = inject(HttpClient);

  constructor() { }

}
