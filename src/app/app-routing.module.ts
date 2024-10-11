import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicBaseComponent } from './public-base/public-base.component';
import { PrivateBaseComponent } from './private-base/private-base.component';

const routes: Routes = [
  {
    path: 'login', component: PublicBaseComponent,
    loadChildren: () => import('../app/public-base/public-base.module').then(m => m.PublicBaseModule)
  },
  {
    path: 'dashboard', component: PrivateBaseComponent, children: [
      { path: 'employee', loadChildren: () => import('../app/private-base/employee/employee.module').then(m => m.EmployeeModule) },
      { path: 'department', loadChildren: () => import('../app/private-base/department/department.module').then(m => m.DepartmentModule) },
      { path: 'user-department', loadChildren: () => import('../app/private-base/user-department/user-department.module').then(m => m.UserDepartmentModule) },
      { path: 'item', loadChildren: () => import('../app/private-base/item/item.module').then(m => m.ItemModule) },
      { path: 'order', loadChildren: () => import('../app/private-base/order/order.module').then(m => m.OrderModule) },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
