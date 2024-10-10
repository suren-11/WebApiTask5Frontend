import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../entities/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = '/api/Employee'
  constructor(private http: HttpClient) { }

  employeeData!: Employee;

  setEmployee(employee: Employee) {
    this.employeeData = employee
  }

  getSelectedEmployee(): Employee {
    return this.employeeData;
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  saveEmployee(employee: Employee) {
    return this.http.post(this.apiUrl, employee);
  }

  updateEmployee(employee: Employee){
    return this.http.put(this.apiUrl,employee);
  }
}
