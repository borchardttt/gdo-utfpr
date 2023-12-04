import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usuarioLogado: string | null;

  constructor(private authService: AuthService) {
    this.usuarioLogado = authService.getAuthenticatedUser();
  }
  isMobile(): boolean {
    const breakpoint = 768;
    return window.innerWidth <= breakpoint;
  }
}
