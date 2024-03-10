import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Order } from '@models/index';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly apiUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() { }

  getOrders(): Observable<Order[]> {
    const url = `${this.apiUrl}/api/orders`;
    return this.http.get<Order[]>(url);
  }

  getOrder(id: string): Observable<Order> {
    const url = `${this.apiUrl}/api/orders/${id}`;
    return this.http.get<Order>(url);
  }

  createOrder(order: Order): Observable<Order> {
    const url = `${this.apiUrl}/api/orders`;
    return this.http.post<Order>(url, order);
  }

  updateOrder(order: Order): Observable<Order> {
    const url = `${this.apiUrl}/api/orders/${order.id}`;
    return this.http.put<Order>(url, order);
  }

  deleteOrder(id: string): Observable<Order> {
    const url = `${this.apiUrl}/api/orders/${id}`;
    return this.http.delete<Order>(url);
  }

  getOrdersByClientId(clientId: string): Observable<Order[]> {
    const url = `${this.apiUrl}/api/orders/client/${clientId}`;
    return this.http.get<Order[]>(url);
  }

  getOrdersByProviderId(providerId: string): Observable<Order[]> {
    const url = `${this.apiUrl}/api/orders/provider/${providerId}`;
    return this.http.get<Order[]>(url);
  }
}
