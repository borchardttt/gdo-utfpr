import { Component } from '@angular/core';

@Component({
  selector: 'app-movimentacoes-recentes',
  templateUrl: './movimentacoes-recentes.component.html',

})
export class MovimentacoesRecentesComponent {
  movimentacoes = [
    { usuario: 'Diego Marczal', data: '14-08-2023', status: 'Aprovada' },
    { usuario: 'Sediane Carmen', data: '14-08-2023', status: 'Pendente' },
    { usuario: 'Paulo Soares', data: '14-08-2023', status: 'Aguardando Aprovação' }
  ];

  getStatusClass(status: string): string {
    if (status === 'Aprovada') {
      return 'status completed';
    } else if (status === 'Pendente') {
      return 'status pending';
    } else if (status === 'Aguardando Aprovação') {
      return 'status process';
    }
    return '';
  }
}
