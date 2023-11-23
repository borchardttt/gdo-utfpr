// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://apigdoutfpr.onrender.com/users';
  private localStorageKey = 'authUser';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users) => {
        const user = users.find(
          (u) => u.nome === username && u.senha === password
        );

        if (user) {
          localStorage.setItem(this.localStorageKey, user.nome);

          this.router.navigate(['/home']);
          return true;
        } else {
          console.error('Login inválido');
          return false;
        }
      })
    );
  }

  getAuthenticatedUser(): string | null {
    return localStorage.getItem(this.localStorageKey);
  }

  logout(): void {
    localStorage.removeItem(this.localStorageKey);
    this.router.navigate(['/login']);
  }
}
