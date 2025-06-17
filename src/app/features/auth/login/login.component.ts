import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginRequest } from '../../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    const dto: LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.auth.login(dto).subscribe({
      next: () => {
        this.error = '';
        this.router.navigate(['/']); // Cambia con /home o /dashboard se preferisci
      },
      error: () => {
        this.error = 'Invalid username or password';
      }
    });
  }
}
