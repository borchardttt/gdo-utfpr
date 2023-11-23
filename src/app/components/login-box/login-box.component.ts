import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css'],
})
export class LoginBoxComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  showPassword = false;
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  handleTogglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordInput.nativeElement.type = this.showPassword
      ? 'text'
      : 'password';
  }

  onSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.authService.login(this.username, this.password).subscribe(
        (success) => {
          if (success) {
            Swal.fire({
              title: 'Login bem-sucedido!',
              icon: 'success',
              confirmButtonColor: '#FECC00',
              confirmButtonText: 'OK',
            });
          } else {
            console.error('Login inválido');
            Swal.fire({
              title: 'Login inválido',
              icon: 'error',
              confirmButtonColor: '#d84550',
              confirmButtonText: 'OK',
            });
          }
        },
        (error) => {
          console.error('Erro na autenticação', error);
          Swal.fire({
            title: 'Erro na autenticação',
            text: 'Houve um erro ao realizar o login.',
            icon: 'error',
            confirmButtonColor: '#d84550',
            confirmButtonText: 'OK',
          });
        }
      );
    }
  }
}
