import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { CreateOrderRequest, CreateOrderResponse } from '@interfaces/index';
import { Observable, map } from 'rxjs';
import { PaypalErrorResponse } from '../interfaces/paypal-error-response.interface';
import { PaypalOrderConfirmResponse } from '../interfaces/paypal-order-confirm-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private readonly apiUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() { }

  createOrder(order: CreateOrderRequest): Observable<CreateOrderResponse> {
    const url = `${this.apiUrl}/api/payment/create-order`;
    return this.http.post<CreateOrderResponse>(url, order);
  }

  captureOrder(token: string): Observable<PaypalOrderConfirmResponse | PaypalErrorResponse> {
    const url = `${this.apiUrl}/api/payment/capture-order`;
    const params = new HttpParams().set('token', token);
    return this.http.get<PaypalOrderConfirmResponse | PaypalErrorResponse>(url, { params });
  }

  cancelOrder(orderId: string): Observable<any> {
    const url = `${this.apiUrl}/api/payment/cancel-order`;
    return this.http.get<any>(url, {});
  }

}
