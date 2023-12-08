import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EntidadesService } from 'src/app/services/entidades/entidades.service';
import Swal from 'sweetalert2';

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

  mostrarAlertaConfirmacao(): void {
    Swal.fire({
      title: 'Confirmar Atualização',
      text: 'Tem certeza de que deseja atualizar a entidade?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#FECC00',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, atualizar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.salvarEdicao();
      }
    });
  }

  salvarEdicao(): void {
    if (this.validateForm()) {
      const idEntidade = this.entidadeSelecionada!;
      const novoOrcamento = this.novoOrcamento!;

      this.entidadesService.getEntidadeById(idEntidade).subscribe((entidade) => {
        entidade.orcamento = novoOrcamento;

        this.entidadesService.updateEntidade(idEntidade, entidade).subscribe(() => {
          this.entidadesService.getAllEntidades().subscribe((entidades) => {
            this.entidades = entidades;
            this.entidadeSelecionada = null;
            this.novoOrcamento = null;

            Swal.fire({
              title: 'Entidade atualizada com sucesso!',
              icon: 'success',
              confirmButtonColor: '#FECC00',
              confirmButtonText: 'OK'
            });
          });
        }, (error) => {
          console.error('Erro ao atualizar entidade', error);

          Swal.fire({
            title: 'Erro!',
            text: 'Houve um erro ao atualizar a entidade.',
            icon: 'error',
            confirmButtonColor: '#d84550',
            confirmButtonText: 'OK'
          });
        });
      });
    }
  }

  validateForm(): boolean {
    if (this.entidadeSelecionada !== null && this.novoOrcamento !== null) {
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
