import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailLineComponent } from './car-detail-line.component';

describe('CarDetailLineComponent', () => {
  let component: CarDetailLineComponent;
  let fixture: ComponentFixture<CarDetailLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
