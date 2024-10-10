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

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
