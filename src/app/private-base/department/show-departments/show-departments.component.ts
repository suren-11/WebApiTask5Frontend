import { Component } from '@angular/core';
import { Department } from '../../../entities/department';
import { Router } from '@angular/router';
import { DepartmentService } from '../../../services/department/department.service';

@Component({
  selector: 'app-show-departments',
  templateUrl: './show-departments.component.html',
  styleUrl: './show-departments.component.css'
})
export class ShowDepartmentsComponent {
  departments: Department[] = [];

  constructor(private router: Router, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.loadAllDepartments();
  }

  loadAllDepartments() {
    this.departmentService.getDepartments().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: (error) => {
        console.error("Error Employee fetching ", error);
      }
    });
  }

  goToUpdate(department: Department) {
    this.departmentService.setDepartment(department);
    this.router.navigate(['/dashboard/employee/update-employee']);
  }
}
