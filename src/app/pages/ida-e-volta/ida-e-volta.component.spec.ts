import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdaEVoltaComponent } from './ida-e-volta.component';

describe('IdaEVoltaComponent', () => {
  let component: IdaEVoltaComponent;
  let fixture: ComponentFixture<IdaEVoltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdaEVoltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdaEVoltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
