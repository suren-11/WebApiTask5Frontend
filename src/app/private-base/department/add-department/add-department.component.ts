import { Component } from '@angular/core';
import { Department } from '../../../entities/department';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../../../services/department/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  department: Department = new Department(0n, '', '', '');

  departmentForm!: FormGroup;

  constructor(
    private departmentService: DepartmentService,
    // private courseService: CourseService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.departmentForm = this.fb.group({
      id:[1],
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      code: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  save() {
    if (this.departmentForm.valid) {
      this.department.id = this.departmentForm.get('id')?.value,
      this.department.name = this.departmentForm.get('name')?.value;
      this.department.description = this.departmentForm.get('description')?.value;
      this.department.code = this.departmentForm.get('code')?.value;

      this.departmentService.saveDepartment(this.department).subscribe(
        response =>{
          this.router.navigate(['/dashboard/department/show-all-departments'])
        }
      );
    } else {
      this.departmentForm.markAllAsTouched();
    }
  }

  // loadCourses() {
  //   this.courses = this.courseService.getCourses();
  // }
}
