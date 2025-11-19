import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemsFilterComponent } from './food-items-filter.component';

describe('FoodItemsFilterComponent', () => {
  let component: FoodItemsFilterComponent;
  let fixture: ComponentFixture<FoodItemsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodItemsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodItemsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
