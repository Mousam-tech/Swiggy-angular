import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-top-restaurant',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './top-restaurant.component.html',
  styleUrl: './top-restaurant.component.css'
})
export class TopRestaurantComponent {
  service=inject(SharedServiceService)
  items=Array.from({length:15},((_,i)=>({
    id:i,
    name:`product${i}`,
    image:`https://picsum.photos/200?random=${i + 1}`
  })))
  currentIndexRestro=0
  visibleItems=6
  ngOnInit(){
    this.service.restaurantsData.subscribe((data)=>{
      const topData=data
      if(topData)
        this.items=topData.filter((v:any)=>v.rating>4.2)
    })
  }
  slideLeftRestr(){
    if(this.currentIndexRestro<this.items.length-this.visibleItems){
      this.currentIndexRestro++
    }
  }
  slideRightRestr(){
    if(this.currentIndexRestro>0){
      this.currentIndexRestro--
    }
  }
  getAnimation(){
     return `translateX(-${(100 / this.visibleItems) * this.currentIndexRestro}%)`;
  }
}
