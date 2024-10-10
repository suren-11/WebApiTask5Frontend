import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../entities/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  employee!: Employee;
  employeeForm!: FormGroup;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(5)]],
      nic: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.loadEmployee();
  }

  loadEmployee() {
    this.employee = this.employeeService.getSelectedEmployee();
    if (this.employee) {

      const date = new Date(this.employee.dateOfBirth);
      const formattedDate = date.toISOString().split('T')[0];

      this.employeeForm.patchValue({
        id: this.employee.id,
        name: this.employee.name,
        nic: this.employee.nic,
        email: this.employee.email,
        dob: formattedDate,
        gender: this.employee.gender,
      })
    } else {
      console.log("no employee");

    }
  }

  update() {
    if (this.employeeForm.valid) {
      this.employee.id = this.employeeForm.get('id')?.value;
      this.employee.name = this.employeeForm.get('name')?.value;
      this.employee.nic = this.employeeForm.get('nic')?.value;
      this.employee.email = this.employeeForm.get('email')?.value;
      this.employee.dateOfBirth = this.employeeForm.get('dob')?.value;
      this.employee.gender = this.employeeForm.get('gender')?.value;

      this.employeeService.updateEmployee(this.employee).subscribe(
        response => {
          this.router.navigate(['/dashboard/employee/show-all-employees'])
        }
      );
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }

}
