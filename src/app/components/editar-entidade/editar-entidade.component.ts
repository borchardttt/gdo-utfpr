import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EntidadesService } from 'src/app/services/entidades/entidades.service';

@Component({
  selector: 'app-editar-entidade',
  templateUrl: './editar-entidade.component.html',
  styleUrls: ['./editar-entidade.component.css']
})
export class EditarEntidadeComponent implements OnInit {
  entidades: any[] = [];
  entidadeSelecionada: number | null = null;
  novoOrcamento: number | null = null;

  constructor(private entidadesService: EntidadesService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.entidadesService.getAllEntidades().subscribe((entidades) => {
      this.entidades = entidades;
    });
  }

  salvarEdicao(): void {
    if (this.entidadeSelecionada !== null && this.novoOrcamento !== null) {
      const idEntidade = this.entidadeSelecionada;
      const novoOrcamento = this.novoOrcamento;

      this.entidadesService.getEntidadeById(idEntidade).subscribe((entidade) => {
        entidade.orcamento = novoOrcamento;

        this.entidadesService.updateEntidade(idEntidade, entidade).subscribe(() => {
          this.entidadesService.getAllEntidades().subscribe((entidades) => {
            this.entidades = entidades;
            this.entidadeSelecionada = null;
            this.novoOrcamento = null;
          });
        });
      });
    }
  }
}
