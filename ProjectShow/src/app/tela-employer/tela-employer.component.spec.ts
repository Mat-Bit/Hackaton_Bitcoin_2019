import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEmployerComponent } from './tela-employer.component';

describe('TelaEmployerComponent', () => {
  let component: TelaEmployerComponent;
  let fixture: ComponentFixture<TelaEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
