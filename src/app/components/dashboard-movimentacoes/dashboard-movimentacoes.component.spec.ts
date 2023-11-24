import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMovimentacoesComponent } from './dashboard-movimentacoes.component';

describe('DashboardMovimentacoesComponent', () => {
  let component: DashboardMovimentacoesComponent;
  let fixture: ComponentFixture<DashboardMovimentacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMovimentacoesComponent]
    });
    fixture = TestBed.createComponent(DashboardMovimentacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
