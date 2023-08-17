import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoesRecentesComponent } from './movimentacoes-recentes.component';

describe('MovimentacoesRecentesComponent', () => {
  let component: MovimentacoesRecentesComponent;
  let fixture: ComponentFixture<MovimentacoesRecentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentacoesRecentesComponent]
    });
    fixture = TestBed.createComponent(MovimentacoesRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
