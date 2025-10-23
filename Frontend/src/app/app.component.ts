import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FoodItemsFilterComponent } from './component/food-items-filter/food-items-filter.component';
import { TopRestaurantComponent } from './component/top-restaurant/top-restaurant.component';
import { RestaurantListComponent } from './component/restaurant-list/restaurant-list.component';
import { RestaurantMenuComponent } from './component/restaurant-menu/restaurant-menu.component';
import { CartComponent } from './component/cart/cart.component';
import { FooterComponent } from './component/footer/footer.component';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,NavBarComponent,RestaurantMenuComponent,CartComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy';
  service=inject(SharedServiceService)
  ngOnInit(){
    this.service.cartItems.next(JSON.parse(localStorage.getItem("itemsCart") || ""))
  }
}
