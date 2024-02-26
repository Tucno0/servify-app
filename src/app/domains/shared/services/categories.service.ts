import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private readonly apiUrl: string = environment.apiUrl;

  private http = inject(HttpClient);

  constructor() { }

  getCategories(): Observable<Category[]> {
    const url = `${this.apiUrl}/api/categories`;
    return this.http.get<Category[]>(url);
  }

}
