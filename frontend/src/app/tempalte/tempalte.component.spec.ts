import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempalteComponent } from './tempalte.component';

describe('TempalteComponent', () => {
  let component: TempalteComponent;
  let fixture: ComponentFixture<TempalteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempalteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
