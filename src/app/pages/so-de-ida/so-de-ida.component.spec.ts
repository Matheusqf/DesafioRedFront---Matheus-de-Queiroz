import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoDeIdaComponent } from './so-de-ida.component';

describe('SoDeIdaComponent', () => {
  let component: SoDeIdaComponent;
  let fixture: ComponentFixture<SoDeIdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoDeIdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoDeIdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
