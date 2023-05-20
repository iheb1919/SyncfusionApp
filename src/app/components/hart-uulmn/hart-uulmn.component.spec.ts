import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HartUulmnComponent } from './hart-uulmn.component';

describe('HartUulmnComponent', () => {
  let component: HartUulmnComponent;
  let fixture: ComponentFixture<HartUulmnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HartUulmnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HartUulmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
