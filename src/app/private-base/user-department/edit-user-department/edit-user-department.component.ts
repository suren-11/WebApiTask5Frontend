import { Component } from '@angular/core';
import { UserDepartment } from '../../../entities/user-departments';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDepartmentService } from '../../../services/user-department/user-department.service';
import { Department } from '../../../entities/department';
import { Employee } from '../../../entities/employee';
import { DepartmentService } from '../../../services/department/department.service';
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  selector: 'app-edit-user-department',
  templateUrl: './edit-user-department.component.html',
  styleUrl: './edit-user-department.component.css'
})
export class EditUserDepartmentComponent {
  userDepartment!: UserDepartment;
  userDepartmentForm!: FormGroup;
  departments:Department[]=[];
  employees: Employee[]=[];

  constructor(
    private router: Router,
    private userDept: UserDepartmentService,
    private fb: FormBuilder,
    private departmentService:DepartmentService,
    private employeeService:EmployeeService,
  ) {
    this.userDepartmentForm = this.fb.group({
      id:[1],
      userId: [0, [Validators.required]],
      departmentId: [0, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.loadEmployee();
    this.loadDepartments(),
    this.loadEmployees()
  }

  loadEmployee() {
    this.userDepartment = this.userDept.getSelectedUserDepartment();
    if (this.userDepartment) {

      this.userDepartmentForm.patchValue({
        id: this.userDepartment.id,
        userId: this.userDepartment.userId,
        departmentId: this.userDepartment.departmentId,
      })
    } else {
      console.log("no employee");

    }
  }

  update() {
    if (this.userDepartmentForm.valid) {
      this.userDepartment.id = this.userDepartmentForm.get('id')?.value;
      this.userDepartment.userId = this.userDepartmentForm.get('userId')?.value;
      this.userDepartment.departmentId = this.userDepartmentForm.get('departmentId')?.value;

      this.userDept.updateUserDepartment(this.userDepartment).subscribe(
        response => {
          this.router.navigate(['/dashboard/user-department/show-user-departments'])
        }
      );
    } else {
      this.userDepartmentForm.markAllAsTouched();
    }
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe({
     next:(data)=>{
       console.log(data);
       
       this.departments = data
     }
     });
   }
   
   loadEmployees() {
    this.employeeService.getEmployees().subscribe({
     next:(data)=>{
       console.log(data);
       
       this.employees = data
     }
     });
   }
}
