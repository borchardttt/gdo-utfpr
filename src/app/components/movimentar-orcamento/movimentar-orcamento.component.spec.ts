import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentarOrcamentoComponent } from './movimentar-orcamento.component';

describe('MovimentarOrcamentoComponent', () => {
  let component: MovimentarOrcamentoComponent;
  let fixture: ComponentFixture<MovimentarOrcamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentarOrcamentoComponent]
    });
    fixture = TestBed.createComponent(MovimentarOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
