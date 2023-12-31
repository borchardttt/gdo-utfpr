import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSidebarComponent } from './system-sidebar.component';

describe('SystemSidebarComponent', () => {
  let component: SystemSidebarComponent;
  let fixture: ComponentFixture<SystemSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemSidebarComponent]
    });
    fixture = TestBed.createComponent(SystemSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
