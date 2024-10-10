import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../../entities/department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = '/api/Department'
  constructor(private http: HttpClient) { }

  departmentData!: Department;

  setDepartment(department: Department) {
    this.departmentData = department
  }

  getSelectedDepartment(): Department {
    return this.departmentData;
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  saveDepartment(department: Department) {
    return this.http.post(this.apiUrl, department);
  }

  updateDepartment(department: Department) {
    return this.http.put(this.apiUrl, department);
  }
}
