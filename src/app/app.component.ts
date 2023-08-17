import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showListaMovimentacoes = false;
  showDashboard = true;
  showListaEntidades = false;
  showListaUsuarios = false;

  onMovimentacoesClick(): void {
    this.showDashboard = false;
    this.showListaMovimentacoes = true;
    this.showListaEntidades = false;
    this.showListaUsuarios = false;
  }

  onUsuariosClick(): void {
    this.showDashboard = false;
    this.showListaEntidades = false;
    this.showListaMovimentacoes = false;
    this.showListaUsuarios = true;
  }

  onEntidadesClick(): void {
    this.showDashboard = false;
    this.showListaMovimentacoes = false;
    this.showListaEntidades = true;
    this.showListaUsuarios = false;
  }

  onDashboardClick(): void {
    this.showDashboard = true;
    this.showListaMovimentacoes = false;
    this.showListaEntidades = false;
    this.showListaUsuarios = false;
  }
}
