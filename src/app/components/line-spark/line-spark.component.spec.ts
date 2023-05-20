import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSparkComponent } from './line-spark.component';

describe('LineSparkComponent', () => {
  let component: LineSparkComponent;
  let fixture: ComponentFixture<LineSparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSparkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineSparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
