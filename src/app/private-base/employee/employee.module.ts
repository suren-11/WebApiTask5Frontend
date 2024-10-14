import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { GenderPipe } from '../../pipe/gender.pipe';
import { DatePickerComponent } from '../../widget/date-picker/date-picker.component';

const routes: Routes = [
  { path: '', component: AddEmployeeComponent },
  { path: 'show-all-employees', component: ShowEmployeesComponent },
  { path: 'update-employee', component: UpdateEmployeeComponent }
];

@NgModule({
  declarations: [
    ShowEmployeesComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    GenderPipe,
    DatePickerComponent
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
