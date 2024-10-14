import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../entities/employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/employee/employee.service';
import { Router } from '@angular/router';
import { GenderEnum } from '../../../enum/GenderEnum';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee(0, '', '', '', new Date(), '');

  employeeForm!: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      nic: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  save() {
    if (this.employeeForm.valid) {
      this.employee.name = this.employeeForm.get('name')?.value;
      this.employee.nic = this.employeeForm.get('nic')?.value;
      this.employee.email = this.employeeForm.get('email')?.value;
      this.employee.dateOfBirth = new Date(this.employeeForm.get('dob')?.value);
      this.employee.gender = this.employeeForm.get('gender')?.value;

      console.log(this.employee);
      
    
      this.employeeService.saveEmployee(this.employee).subscribe(
        response =>{
          this.router.navigate(['/dashboard/employee/show-all-employees'])
        }
      );
    } else {
      this.employeeForm.markAllAsTouched();
    }

    // console.log(this.e);
    // this.employeeService.saveEmployee(this.e).subscribe(
    //   response =>{
    //     this.router.navigate(['/dashboard/employee/show-all-employees'])
    //   }
    // );
  }

}
