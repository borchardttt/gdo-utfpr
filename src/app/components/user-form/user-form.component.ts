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
    // Aq eu envio os dados do formulário pro db json
    this.http.post('http://localhost:3000/usuarios', this.user)
      .subscribe(response => {
        console.log('Usuário cadastrado com sucesso', response);

        this.user = {
          nome: '',
          email: ''
        };
      }, error => {
        console.error('Erro ao cadastrar usuário', error);
      });
  }
}
