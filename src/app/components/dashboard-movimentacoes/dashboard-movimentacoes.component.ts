import { Component, OnInit } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades/entidades.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-movimentacoes',
  templateUrl: './dashboard-movimentacoes.component.html',
  styleUrls: ['./dashboard-movimentacoes.component.css']
})
export class DashboardMovimentacoesComponent implements OnInit {
  entidadesData: any[] = [];

  constructor(private entidadesService: EntidadesService) {}

  ngOnInit(): void {
    this.entidadesService.getAllEntidades().subscribe((data) => {
      this.entidadesData = data.map((entidade) => ({
        nome: entidade.nome,
        movimentado: entidade['orcamento-movimentado']
      }));

      this.createBarChart();
    });
  }

  createBarChart(): void {
    const canvas: any = document.getElementById('barChart');
    const ctx = canvas.getContext('2d');

    const nomesEntidades = this.entidadesData.map((entidade) => entidade.nome);
    const valoresMovimentados = this.entidadesData.map((entidade) => entidade.movimentado);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: nomesEntidades,
        datasets: [{
          label: 'Valor Movimentado',
          data: valoresMovimentados,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
