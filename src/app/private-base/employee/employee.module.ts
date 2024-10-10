import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: '', component: AddEmployeeComponent },
  { path: 'show-all-employees', component: ShowEmployeesComponent },
  { path: 'update-employee', component: UpdateEmployeeComponent }
];

@NgModule({
  declarations: [
    ShowEmployeesComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class EmployeeModule { }
