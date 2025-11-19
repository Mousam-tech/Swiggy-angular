import { Component, inject } from '@angular/core';
import { TopRestaurantComponent } from '../top-restaurant/top-restaurant.component';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
import { FoodItemsFilterComponent } from '../food-items-filter/food-items-filter.component';
import { SharedServiceService } from '../../shared-service.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoodItemsFilterComponent,TopRestaurantComponent,RestaurantListComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
