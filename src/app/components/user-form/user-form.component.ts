import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = {
    nome: '',
    email: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.validateForm()) {
      this.http.post('https://apigdoutfpr.onrender.com/users', this.user)
        .subscribe(response => {
          console.log('Usuário cadastrado com sucesso', response);

          localStorage.setItem('nomeDoUsuario', this.user.nome);

          this.user = {
            nome: '',
            email: ''
          };
        }, error => {
          console.error('Erro ao cadastrar usuário', error);
        });
    }
  }

  validateForm() {
    if (this.user.nome && this.user.email) {
      return true;
    } else {
      console.error('Campos inválidos. Preencha corretamente o formulário.');
      return false;
    }
  }

}
