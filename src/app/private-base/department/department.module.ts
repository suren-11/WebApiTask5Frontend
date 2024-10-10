import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowDepartmentsComponent } from './show-departments/show-departments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ShowUserDepartmentComponent } from '../user-department/show-user-department/show-user-department.component';

const routes: Routes = [
  { path: '', component: AddDepartmentComponent },
  { path: 'show-all-departments', component: ShowDepartmentsComponent },
  // { path: 'update-employee', component: UpdateEmployeeComponent }
];

@NgModule({
  declarations: [
    ShowDepartmentsComponent,
    AddDepartmentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DepartmentModule { }
