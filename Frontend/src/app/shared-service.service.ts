import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  http=inject(HttpClient)
  constructor() {
    this.getRestroData("http://localhost:3000/api/restaurants").subscribe((data)=>{
      this.restaurantsData.next(data)
      console.log(data);
    })
   }
   restaurantsData=new BehaviorSubject<any>("")
   notExist:any=""
   selectedRestro=new BehaviorSubject<any>("")
   cartItems=new BehaviorSubject<any>("")
   
   getRestroData(API:string):Observable<any>{
    return this.http.get<any>(API)
   }
   getFilterRestroData(API:string):Observable<any>{
    return this.http.get<any>(API)
   }
   getMenuOfRestro(API:string):Observable<any>{
    return this.http.get<any>(API)
   }
   setItemsToCart(data:any){
      localStorage.setItem("itemsCart",JSON.stringify(data))
      this.cartItems.next(data)
   }
}
