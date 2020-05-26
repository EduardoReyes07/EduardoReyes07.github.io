import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesCanchaComponent } from './opciones-cancha.component';

describe('OpcionesCanchaComponent', () => {
  let component: OpcionesCanchaComponent;
  let fixture: ComponentFixture<OpcionesCanchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesCanchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
