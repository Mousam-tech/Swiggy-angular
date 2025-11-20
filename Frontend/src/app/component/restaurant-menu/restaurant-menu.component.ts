import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './restaurant-menu.component.html',
  styleUrl: './restaurant-menu.component.css'
})
export class RestaurantMenuComponent {
  service=inject(SharedServiceService)
  route=inject(ActivatedRoute)
  id:any=""
  restaurantInfo:any=""
  idForItemInCart:any=""
  noexist:any=""
  count:any=""
  menuItems:any = ""
  cartCount:any=""
 cartCountSubject = new BehaviorSubject<number>(this.getCartCount());
  ngOnInit(){
    // localStorage.removeItem("itemsCart")
    this.id=this.route.snapshot.paramMap.get("id")
    this.service.restaurantsData.subscribe((data)=>{
      if(data!=="")
        this.restaurantInfo=(data ?? []).find((v: any) => v.id == this.id);
    })
    this.service.selectedRestro.next(this.restaurantInfo);
    
    this.service.getMenuOfRestro(`http://localhost:3000/api/restroMenu/${this.id}`).subscribe((data)=>{
      const stored = localStorage.getItem("itemsCart");
      let  cartData = stored ? JSON.parse(stored) : [];
      this.menuItems = data.menuItems.map((item: any) => {
        const existing = cartData.find(
            (c: any) => c.name === item.name && c.dataid === data.id
        );
          return {
            ...item,
          count: existing ? existing.count : 0,
          dataid: data.id
          }
      });
    })
    this.cartCountSubject.subscribe((data)=>{
      this.cartCount=data
    })
  }
  addItemTocart(data:any,dataid:any){
    this.noexist=false
    this.count=1
    let existingItems=localStorage.getItem("itemsCart");
    this.idForItemInCart=this.id
    if(!existingItems){
      this.service.setItemsToCart([{...data,dataid:this.idForItemInCart,count:this.count}])
    }
    else {
      let parsedItem=JSON.parse(existingItems);
      const index=parsedItem.findIndex((v:any)=>v.dataid==this.idForItemInCart)
      if(index!==-1){
        parsedItem.push({...data,dataid:this.idForItemInCart,count:this.count});
        this.service.setItemsToCart(parsedItem)
      }
      else{
        this.noexist=true
      }
    }
    const index=this.menuItems.findIndex((v:any)=>v.name==data.name)
      if(index!==-1){
        this.menuItems[index].count=1
      }
    this.updateCartCount();
  }
  increment(itemName:any,dataid:any) {
    const stored = localStorage.getItem("itemsCart");
    const cardData = stored ? JSON.parse(stored) : [];
    const Index=cardData.findIndex((v:any)=>v.name==itemName)
    const index=this.menuItems.findIndex((v:any)=>v.name==itemName)
    if(Index!==-1){
        this.menuItems[index].count=(cardData[Index].count ||0)+1
        cardData[Index].count = this.menuItems[index].count
        localStorage.setItem("itemsCart", JSON.stringify(cardData));
        this.service.cartItems.next(JSON.stringify(cardData))
      }  
      this.updateCartCount();  
  }

  decrement(itemName:any,dataid:any) {
    const stored = localStorage.getItem("itemsCart");
    let  cardData = stored ? JSON.parse(stored) : [];
    const Index=cardData.findIndex((v:any)=>v.name==itemName)
    const index=this.menuItems.findIndex((v:any)=>itemName)
    if(Index!==-1 && cardData[Index].count>1){
        this.menuItems[index].count=(cardData[Index].count ||0)-1
        cardData[Index].count = this.menuItems[index].count
        localStorage.setItem("itemsCart", JSON.stringify(cardData));
         this.service.cartItems.next(JSON.stringify(cardData))
    }
    else{
        cardData=cardData.filter((v:any)=>v.name!=itemName)
        if(cardData.length>0){
          localStorage.setItem("itemsCart",JSON.stringify(cardData))
           this.service.cartItems.next(JSON.stringify(cardData))
        }
        else
          localStorage.removeItem("itemsCart")
         this.service.cartItems.next("")
     }
     this.updateCartCount();
  }
  isIncart(data:any){
     const stored = localStorage.getItem("itemsCart");
     const cardData = stored ? JSON.parse(stored) : []; 
  this.count = cardData.filter((v: any) => v.name === data).length;
  return this.count > 0; 
  }
  getCartCount(){
    const items = JSON.parse(localStorage.getItem("itemsCart") || '[]');
    return items.length;
  }
  updateCartCount() {
    this.cartCountSubject.next(this.getCartCount());
  }
}
