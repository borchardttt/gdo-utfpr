import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-lembretes',
  templateUrl: './lista-lembretes.component.html',
  styleUrls: ['./lista-lembretes.component.css']
})
export class ListaLembretesComponent {
  tasks = [
    { id: 1, title: "Bom dia Pessoal! Por favor inserir um movimento no orçamento do Refeitório até dia 31!", user: "Roni Fabio", completed: true },
    { id: 2, title: "Movimentação de orçamento de Ativos de T.I não realizado.", user: "Eleandro Maschio", completed: false },
  ];

  isCompletedClass(completed: boolean): string {
    return completed ? 'completed' : 'not-completed';
  }
}
