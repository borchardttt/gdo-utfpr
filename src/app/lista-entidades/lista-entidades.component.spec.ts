import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntidadesComponent } from './lista-entidades.component';

describe('ListaEntidadesComponent', () => {
  let component: ListaEntidadesComponent;
  let fixture: ComponentFixture<ListaEntidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEntidadesComponent]
    });
    fixture = TestBed.createComponent(ListaEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});