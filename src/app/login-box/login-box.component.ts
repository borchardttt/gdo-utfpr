import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  showPassword = false;

  handleTogglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordInput.nativeElement.type = 'text';
    } else {
      this.passwordInput.nativeElement.type = 'password';
    }
  }
}
