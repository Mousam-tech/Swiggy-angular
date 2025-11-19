import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-food-items-filter',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './food-items-filter.component.html',
  styleUrl: './food-items-filter.component.css'
})
export class FoodItemsFilterComponent {
  service=inject(SharedServiceService)
  items:any=""
  visibleItems = 6; // number of items visible
  currentIndex = 0; // index of first visible item
  ngOnInit(){
    this.service.getFilterRestroData("http://localhost:3000/api/foodItemFilter").subscribe((data)=>{
        this.items=data
      })  
  }

  slideLeft() {
    if (this.currentIndex < this.items.length - this.visibleItems) {
      this.currentIndex++;
    }
  }

  slideRight() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getTransform(): string {
    return `translateX(-${(100 / this.visibleItems) * this.currentIndex}%)`;
  }


}
