import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entidade-form',
  templateUrl: './criar-entidade.component.html',
})
export class CriarEntidadeComponent {
  entidade = {
    nome: '',
    orcamento: 0
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.validateForm()) {
      Swal.fire({
        title: 'Confirmar Criação de Entidade',
        text: `Deseja realmente criar a entidade ${this.entidade.nome}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#FECC00',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.http.post('https://apigdoutfpr.onrender.com/entidades', this.entidade)
            .subscribe(response => {
              console.log('Entidade cadastrada com sucesso', response);

              Swal.fire({
                title: 'Entidade criada com sucesso!',
                icon: 'success',
                iconColor: '#FECC00',
                confirmButtonColor: '#FECC00',
                confirmButtonText: 'OK'
              });

              this.entidade = {
                nome: '',
                orcamento: 0
              };
            }, error => {
              console.error('Erro ao cadastrar Entidade', error);
              Swal.fire({
                title: 'Erro!',
                text: 'Houve um erro ao cadastrar a entidade.',
                icon: 'error',
                confirmButtonColor: '#d84550'
              });
            });
        }
      });
    }
  }

  validateForm() {
    if (this.entidade.nome && this.entidade.orcamento) {
      return true;
    } else {
      console.error('Campos inválidos. Preencha corretamente o formulário.');
      return false;
    }
  }
}
