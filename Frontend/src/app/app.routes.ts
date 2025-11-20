import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HelpComponent } from './component/help/help.component';
import { OffersComponent } from './component/offers/offers.component';
import { CartComponent } from './component/cart/cart.component';
import { RestaurantMenuComponent } from './component/restaurant-menu/restaurant-menu.component';
import { RestaurauntFilterFoodComponent } from './component/restauraunt-filter-food/restauraunt-filter-food.component';
import { SearchComponent } from './component/search/search.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"help",component:HelpComponent},
    {path:"offers",component:OffersComponent},
    {path:"cart",component:CartComponent},
    {path:"restromenu/:id",component:RestaurantMenuComponent},
    {path:"restaurauntFilterFood/:cuisine",component:RestaurauntFilterFoodComponent},
    {path:"search",component:SearchComponent}
];
