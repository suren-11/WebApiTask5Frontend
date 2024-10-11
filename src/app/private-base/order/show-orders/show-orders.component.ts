import { Component } from '@angular/core';
import { Order } from '../../../entities/order';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrl: './show-orders.component.css'
})
export class ShowOrdersComponent {
  orders: Order[] = []; 

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadAllOrders()
  }

  loadAllOrders() {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        console.log(data);
        
        this.orders = data;
      },
      error: (error) => {
        console.error("Error Employee fetching ", error);
      }
    });
  }

  goToUpdate(order: Order) {
    this.orderService.setOrder(order);
    // this.router.navigate(['/dashboard/item/update-item']);
  }
}
