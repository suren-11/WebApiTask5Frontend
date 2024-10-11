import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOrderComponent } from './add-order/add-order.component';

const routes: Routes = [
  { path: '', component: AddOrderComponent },
  { path: 'show-all-orders', component: ShowOrdersComponent },
  // { path: 'update-item', component: UpdateItemComponent }
];

@NgModule({
  declarations: [
    ShowOrdersComponent,
    AddOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class OrderModule { }
