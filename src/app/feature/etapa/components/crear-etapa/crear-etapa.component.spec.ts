import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEtapaComponent } from './crear-etapa.component';

describe('CrearEtapaComponent', () => {
  let component: CrearEtapaComponent;
  let fixture: ComponentFixture<CrearEtapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEtapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
