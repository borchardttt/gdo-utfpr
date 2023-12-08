import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = {
    nome: '',
    email: '',
    senha: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.validateForm()) {
      // Exibir Sweet Alert de confirmação antes de fazer a solicitação
      Swal.fire({
        title: 'Confirmação',
        text: 'Deseja realmente cadastrar o usuário?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Exibir Sweet Alert de aguardo durante a solicitação
          Swal.fire({
            title: 'Aguarde',
            text: 'Estamos processando sua solicitação...',
            icon: 'info',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            }
          });

          this.http.post('https://apigdoutfpr.onrender.com/users', this.user)
            .subscribe(response => {
              console.log('Usuário cadastrado com sucesso', response);

              // Fechar o Sweet Alert de aguardo
              Swal.close();

              // Exibir Sweet Alert de conclusão
              Swal.fire({
                title: 'Sucesso!',
                text: 'Usuário cadastrado com sucesso.',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
              });

              localStorage.setItem('nomeDoUsuario', this.user.nome);

              this.user = {
                nome: '',
                email: '',
                senha: ''
              };
            }, error => {
              console.error('Erro ao cadastrar usuário', error);

              // Fechar o Sweet Alert de aguardo
              Swal.close();

              // Exibir Sweet Alert de erro
              Swal.fire({
                title: 'Erro!',
                text: 'Houve um erro ao cadastrar o usuário.',
                icon: 'error',
                confirmButtonColor: '#d33',
                confirmButtonText: 'OK'
              });
            });
        }
      });
    }
  }

  validateForm() {
    if (this.user.nome && this.user.email) {
      return true;
    } else {
      Swal.fire({
        title: 'Campos inválidos',
        text: 'Preencha corretamente o formulário.',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
      return false;
    }
  }

}
