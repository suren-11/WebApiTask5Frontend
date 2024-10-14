import { Component, OnInit } from '@angular/core';
import { UserDepartment } from '../../../entities/user-departments';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDepartmentService } from '../../../services/user-department/user-department.service';
import { Router } from '@angular/router';
import { Department } from '../../../entities/department';
import { DepartmentService } from '../../../services/department/department.service';
import { Employee } from '../../../entities/employee';
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  selector: 'app-add-user-department',
  templateUrl: './add-user-department.component.html',
  styleUrl: './add-user-department.component.css'
})
export class AddUserDepartmentComponent implements OnInit {
  userDepartment: UserDepartment = new UserDepartment(0, 0n, 0n, true);

  userDepartmentForm!: FormGroup;
  departments:Department[]=[];
  employees: Employee[]=[];

  constructor(
    private userDepartmentService: UserDepartmentService,
    private departmentService:DepartmentService,
    private employeeService:EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userDepartmentForm = this.fb.group({
      userId: [0, [Validators.required]],
      departmentId: [0, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
  }

  save() {
    if (this.userDepartmentForm.valid) {
      this.userDepartment.userId = this.userDepartmentForm.get('userId')?.value;
      this.userDepartment.departmentId = this.userDepartmentForm.get('departmentId')?.value;
      
      this.userDepartmentService.saveUserDepartment(this.userDepartment).subscribe(
        response =>{
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
      this.departments = data
    }
    });
  }
  
  loadEmployees() {
   this.employeeService.getEmployees().subscribe({
    next:(data)=>{
      this.employees = data
    }
    });
  }
}
