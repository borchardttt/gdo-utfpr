import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLembretesComponent } from './lista-lembretes.component';

describe('ListaLembretesComponent', () => {
  let component: ListaLembretesComponent;
  let fixture: ComponentFixture<ListaLembretesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLembretesComponent]
    });
    fixture = TestBed.createComponent(ListaLembretesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
