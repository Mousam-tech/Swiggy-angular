import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurauntFilterFoodComponent } from './restauraunt-filter-food.component';

describe('RestaurauntFilterFoodComponent', () => {
  let component: RestaurauntFilterFoodComponent;
  let fixture: ComponentFixture<RestaurauntFilterFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurauntFilterFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurauntFilterFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
