import { Component, OnInit } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades/entidades.service';

@Component({
  selector: 'app-entidades-list',
  templateUrl: './entidades-list.component.html',
  styleUrls: ['./entidades-list.component.css']
})
export class EntidadesListComponent implements OnInit {
  entidades: any[] = []
  constructor(private entidadesService: EntidadesService) { }
  ngOnInit() {
    this.entidadesService.getAllEntidades().subscribe(entidades => {
      this.entidades = entidades;
    });
  }
}
