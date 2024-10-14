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

  employee: Employee = new Employee(0n, '', '', '', new Date(), GenderEnum.Male, new Date(), new Date());
  genderEnum!:GenderEnum;

  employeeForm!: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      id:[1],
      name: ['', [Validators.required, Validators.minLength(5)]],
      nic: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // this.loadCourses();
    // this.students = this.studentService.getStudents();
  }

  save() {
    if (this.employeeForm.valid) {
      this.employee.id = this.employeeForm.get('id')?.value,
      this.employee.name = this.employeeForm.get('name')?.value;
      this.employee.nic = this.employeeForm.get('nic')?.value;
      this.employee.email = this.employeeForm.get('email')?.value;
      this.employee.dateOfBirth = this.employeeForm.get('dob')?.value;
      this.employee.gender = this.employeeForm.get('gender')?.value;

      this.employeeService.saveEmployee(this.employee).subscribe(
        response =>{
          this.router.navigate(['/dashboard/employee/show-all-employees'])
        }
      );
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }

  // loadCourses() {
  //   this.courses = this.courseService.getCourses();
  // }
}
