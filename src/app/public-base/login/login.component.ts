import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userForm: FormGroup;
  error = false;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.userForm.valid) {
      const { email, password } = this.userForm.value;
      if (email === 'admin@gmail.com' && password === '123456') {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = true;
      }
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
