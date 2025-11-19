import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRestaurantComponent } from './top-restaurant.component';

describe('TopRestaurantComponent', () => {
  let component: TopRestaurantComponent;
  let fixture: ComponentFixture<TopRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
