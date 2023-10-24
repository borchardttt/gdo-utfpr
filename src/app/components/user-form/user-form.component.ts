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
    // Realize a validação dos campos aqui
    if (this.validateForm()) {
      // Se a validação passar, envie os dados para o servidor
      this.http.post('http://localhost:3000/usuarios', this.user)
        .subscribe(response => {
          console.log('Usuário cadastrado com sucesso', response);

          // Armazene o nome do usuário no Web Storage
          localStorage.setItem('nomeDoUsuario', this.user.nome);

          // Limpe o formulário após o envio bem-sucedido
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
    // Faça as validações dos campos aqui usando expressões regulares ou outras regras desejadas.
    if (this.user.nome && this.user.email) {
      // Validação bem-sucedida
      return true;
    } else {
      // Validação falhou, apresente os erros
      // Por exemplo, você pode exibir uma mensagem de erro na interface do usuário.
      console.error('Campos inválidos. Preencha corretamente o formulário.');
      return false;
    }
  }

}
