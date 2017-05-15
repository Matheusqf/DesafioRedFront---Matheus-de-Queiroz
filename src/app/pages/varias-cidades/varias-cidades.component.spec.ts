import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariasCidadesComponent } from './varias-cidades.component';

describe('VariasCidadesComponent', () => {
  let component: VariasCidadesComponent;
  let fixture: ComponentFixture<VariasCidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariasCidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariasCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
