import { Component, OnInit } from '@angular/core';
import { Order } from '../../../entities/order';
import { OrderdItem } from '../../../entities/orderdItem';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order/order.service';
import { Router } from '@angular/router';
import { Item } from '../../../entities/items';
import { ItemService } from '../../../services/item/item.service';
import { Employee } from '../../../entities/employee';
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css'
})
export class AddOrderComponent implements OnInit {
  orderdItems: OrderdItem[] = [];
  order: Order = new Order(0, this.orderdItems, 0, 0);
  orderdItem: OrderdItem = new OrderdItem(0n, 0, 0);
  items: Item[] = [];
  employees: Employee[] = [];
  grandTotal: number = 0;

  orderForm!: FormGroup;
  orderItemForm: FormGroup;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder,
    private itemService: ItemService,
    private employeeService: EmployeeService
  ) {
    this.orderForm = this.fb.group({
      id: [1],
      employeeId: ['', [Validators.required]],
    });

    this.orderItemForm = this.fb.group({
      id: ['', [Validators.required]],
      qty: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.loadAllItems();
    this.loadEmployees();
  }

  setOrderItems() {
    if (this.orderItemForm.valid) {
      this.orderdItem.id = this.orderItemForm.get('id')?.value;
      this.orderdItem.qty = this.orderItemForm.get('qty')?.value;
      this.orderdItem.total = this.orderItemForm.get('total')?.value;

      this.calculateTotal();
      this.orderdItems.push({ ...this.orderdItem });

    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  save() {
    if (this.orderForm.valid) {
      this.order.id = this.orderForm.get('id')?.value;
      this.order.items = this.orderdItems;
      this.order.employeeId = this.orderForm.get('employeeId')?.value;
      this.order.totalPrice = this.grandTotal;

      this.orderService.saveOrder(this.order).subscribe(
        response => {
          this.router.navigate(['/dashboard/order/show-all-orders'])
        }
      );
    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  loadAllItems() {
    this.itemService.getItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (error) => {
        console.error("Error Employee fetching ", error);
      }
    });
  }

  calculateTotal() {
    const item = this.items.find(i => i.id == this.orderdItem.id);
    const price = item?.price;
    if (price) {
      this.orderdItem.total = this.orderdItem.qty * price;
      this.calculateGrandTotal();
    }
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log(data);

        this.employees = data
      }
    });
  }

  calculateGrandTotal() {
    this.grandTotal += this.orderdItem.total;
  }
}
