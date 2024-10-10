import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'show-all-employees', component: ShowEmployeesComponent }
];

@NgModule({
  declarations: [
    ShowEmployeesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class EmployeeModule { }
