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
      Swal.fire({
        title: 'Aguarde...',
        text: 'Realizando login',
        icon: 'info',
        showConfirmButton: false,
        allowOutsideClick: false,
        showLoaderOnConfirm: true,
      });

      if (!this.username || !this.password) {
        Swal.close();
        Swal.fire({
          title: 'Campos inválidos',
          text: 'Preencha todos os campos do formulário.',
          icon: 'error',
          confirmButtonColor: '#d84550',
          confirmButtonText: 'OK',
        });
        return;
      }

      this.authService.login(this.username, this.password).subscribe(
        (success) => {
          Swal.close();

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
    } else {
      Swal.fire({
        title: 'Campos inválidos',
        text: 'Preencha todos os campos do formulário.',
        icon: 'error',
        confirmButtonColor: '#d84550',
        confirmButtonText: 'OK',
      });
    }
  }
}
