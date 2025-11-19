import { Component, inject } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restauraunt-filter-food',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './restauraunt-filter-food.component.html',
  styleUrl: './restauraunt-filter-food.component.css'
})
export class RestaurauntFilterFoodComponent {
  service=inject(SharedServiceService)
  route=inject(ActivatedRoute)
  filterResTroData:any=""
  ngOnInit(){
    const cuisine=this.route.snapshot.paramMap.get("cuisine")
    this.service.restaurantsData.subscribe((data)=>{
      this.filterResTroData=data.filter((v:any)=>v.cuisine.toLowerCase().includes(cuisine?.toLowerCase()))
      console.log(this.filterResTroData)
    })
  }
}
