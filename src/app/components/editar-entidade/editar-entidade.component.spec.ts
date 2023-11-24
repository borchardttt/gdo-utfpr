import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEntidadeComponent } from './editar-entidade.component';

describe('EditarEntidadeComponent', () => {
  let component: EditarEntidadeComponent;
  let fixture: ComponentFixture<EditarEntidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEntidadeComponent]
    });
    fixture = TestBed.createComponent(EditarEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
