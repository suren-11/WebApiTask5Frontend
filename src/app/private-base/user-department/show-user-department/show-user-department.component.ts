import { Component } from '@angular/core';
import { UserDepartment } from '../../../entities/user-departments';
import { Router } from '@angular/router';
import { UserDepartmentService } from '../../../services/user-department/user-department.service';

@Component({
  selector: 'app-show-user-department',
  templateUrl: './show-user-department.component.html',
  styleUrl: './show-user-department.component.css'
})
export class ShowUserDepartmentComponent {
  userDepartments: UserDepartment[] = []; 

  constructor(private router: Router, private departmentService: UserDepartmentService) { }

  ngOnInit(): void {
    this.loadAllDepartments();
  }

  loadAllDepartments() {
    this.departmentService.getUserDepartments().subscribe({
      next: (data) => {
        this.userDepartments = data;
      },
      error: (error) => {
        console.error("Error Employee fetching ", error);
      }
    });
  }

  goToUpdate(department: UserDepartment) {
    this.departmentService.setUserDepartment(department);
    this.router.navigate(['/dashboard/user-department/update-user-departments']);
  }
}
