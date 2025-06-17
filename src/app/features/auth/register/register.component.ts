import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
    imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  message = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    const dto = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.auth.register(dto).subscribe({
      next: () => {
        this.message = 'Registration successful';
        this.router.navigate(['/login']);
      },
      error: err => {
        this.error = err.error?.message || 'Registration failed';
      }
    });
  }
}