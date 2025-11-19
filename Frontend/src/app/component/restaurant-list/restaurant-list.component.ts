import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  service=inject(SharedServiceService)
  restaurants:any=""
  ngOnInit(){
    this.service.restaurantsData.subscribe((data)=>{
      this.restaurants=data
    })
  }
}
