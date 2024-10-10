import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowUserDepartmentComponent } from './show-user-department/show-user-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserDepartmentComponent } from './add-user-department/add-user-department.component';
import { EditUserDepartmentComponent } from './edit-user-department/edit-user-department.component';

const routes: Routes = [
  { path: '', component: AddUserDepartmentComponent },
  { path: 'show-user-departments', component: ShowUserDepartmentComponent },
  { path: 'update-user-departments', component: EditUserDepartmentComponent }
];

@NgModule({
  declarations: [
    ShowUserDepartmentComponent,
    AddUserDepartmentComponent,
    EditUserDepartmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserDepartmentModule { }
