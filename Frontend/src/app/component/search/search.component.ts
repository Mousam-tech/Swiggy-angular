import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
    searchTerm:any=""
    service=inject(SharedServiceService)
    restaurants:any=""
    ngOnInit(){
      this.service.restaurantsData.subscribe((data)=>{
        this.restaurants=data
      })
    }
    onSearchChange(){
      this.restaurants=this.restaurants.filter((v:any)=>v.name.includes(this.searchTerm))
    }
}
