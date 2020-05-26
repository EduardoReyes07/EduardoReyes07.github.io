import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesinicioComponent } from './imagenesinicio.component';

describe('ImagenesinicioComponent', () => {
  let component: ImagenesinicioComponent;
  let fixture: ComponentFixture<ImagenesinicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesinicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
