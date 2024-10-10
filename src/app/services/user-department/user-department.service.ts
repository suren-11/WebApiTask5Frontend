import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDepartment } from '../../entities/user-departments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDepartmentService {

  private apiUrl = '/api/UserDepartment'
  constructor(private http: HttpClient) { }

  userDepartmentData!: UserDepartment;

  setUserDepartment(userDepartment: UserDepartment) {
    this.userDepartmentData = userDepartment
  }

  getSelectedUserDepartment(): UserDepartment {
    return this.userDepartmentData;
  }

  getUserDepartments(): Observable<UserDepartment[]> {
    return this.http.get<UserDepartment[]>(this.apiUrl);
  }

  saveUserDepartment(userDepartment: UserDepartment) {
    return this.http.post(this.apiUrl, userDepartment);
  }

  updateUserDepartment(userDepartment: UserDepartment) {
    return this.http.put(this.apiUrl, userDepartment);
  }
}
