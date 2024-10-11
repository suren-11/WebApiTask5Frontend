import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../entities/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = '/api/Order'
  constructor(private http: HttpClient) { }

  orderData!: Order;

  setOrder(order: Order) {
    this.orderData = order;
  }

  getSelectedOrder(): Order {
    return this.orderData;
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  saveOrder(order: Order) {
    return this.http.post(this.apiUrl, order);
  }

  updateOrder(order: Order) {
    return this.http.put(this.apiUrl, order);
  }
}
