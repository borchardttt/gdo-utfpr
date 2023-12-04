import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movimentar-orcamento',
  templateUrl: './movimentar-orcamento.component.html',
  styleUrls: ['./movimentar-orcamento.component.css']
})
export class MovimentarOrcamentoComponent {
  entidades: any[] = [];
  selectedEntidade: string = '';
  valorMovimentado: number = 0;
  saldo: number = 0;
  saldoAtualizado: number = 0;
  justificativa: string = '';

  constructor(private http: HttpClient, private authService: AuthService) {
    this.fetchEntidades();
  }

  fetchEntidades() {
    this.http.get<any[]>('https://apigdoutfpr.onrender.com/entidades').subscribe(response => {
      this.entidades = response;
    });
  }

  onSubmit() {
    const entidadeSelecionada = this.entidades.find(entidade => entidade.nome === this.selectedEntidade);

    if (entidadeSelecionada) {
      Swal.fire({
        title: 'Confirmar Movimentação',
        text: `Deseja realmente movimentar ${this.valorMovimentado.toFixed(2)} para a entidade ${this.selectedEntidade}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#FECC00',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.valorMovimentado <= entidadeSelecionada.orcamento) {
            entidadeSelecionada['orcamento-movimentado'] = entidadeSelecionada['orcamento-movimentado'] || 0;
            entidadeSelecionada['orcamento-movimentado'] += this.valorMovimentado;
            this.saldo = entidadeSelecionada.orcamento - entidadeSelecionada['orcamento-movimentado'];
            this.saldoAtualizado = this.saldo;

            this.http.put(`https://apigdoutfpr.onrender.com/entidades/${entidadeSelecionada.id}`, entidadeSelecionada)
              .subscribe(response => {
                console.log('Movimentação realizada com sucesso', response);
                const movimentacao = {
                  autor: this.authService.getAuthenticatedUser(),
                  id: 0,
                  entidade: this.selectedEntidade,
                  justificativa: this.justificativa,
                };
                this.http.post('https://apigdoutfpr.onrender.com/movimentacoes', movimentacao)
                  .subscribe(movimentacaoResponse => {
                    console.log('Movimentação registrada com sucesso', movimentacaoResponse);

                    Swal.fire({
                      title: 'Movimentação realizada com sucesso!',
                      icon: 'success',
                      iconColor: '#FECC00',
                      html: `Saldo atualizado: ${this.saldoAtualizado.toFixed(2)}`,
                      confirmButtonColor: '#FECC00',
                      confirmButtonText: 'Voltar a movimentar'
                    });
                  }, error => {
                    console.error('Erro ao registrar a movimentação', error);
                    Swal.fire({
                      title: 'Erro!',
                      text: 'Houve um erro ao registrar a movimentação.',
                      icon: 'error',
                      confirmButtonColor: '#d84550'
                    });
                  });
              }, error => {
                console.error('Erro ao movimentar orçamento', error);
                Swal.fire({
                  title: 'Erro!',
                  text: 'Houve um erro ao movimentar o orçamento.',
                  icon: 'error',
                  confirmButtonColor: '#d84550'
                });
              });
          } else {
            Swal.fire({
              title: 'Saldo Insuficiente!',
              text: 'Você não possui saldo suficiente para realizar essa movimentação.',
              icon: 'warning',
            });
          }
        }
      });
    }
  }
}
