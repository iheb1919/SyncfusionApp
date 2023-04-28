import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLinearComponent } from './chart-linear.component';

describe('ChartLinearComponent', () => {
  let component: ChartLinearComponent;
  let fixture: ComponentFixture<ChartLinearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLinearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartLinearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
