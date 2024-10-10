import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../entities/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrl: './show-employees.component.css'
})
export class ShowEmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        console.error("Error Employee fetching ", error);
      }
    });
  }

}
