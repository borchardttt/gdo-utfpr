import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      this.http.post('https://apigdoutfpr.onrender.com/entidades', this.entidade)
        .subscribe(response => {
          console.log('Entidade cadastrado com sucesso', response);

          this.entidade = {
            nome: '',
            orcamento: 0
          };
        }, error => {
          console.error('Erro ao cadastrar Entidade', error);
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
