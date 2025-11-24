import { Component, inject } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  service=inject(SharedServiceService)
  cartItems:any=0
  selectedRestro:any=""
  itemsprices:any=""
  TotalPrice:any=""
  ngOnInit(){
    const storedItems = localStorage.getItem("itemsCart");
    this.cartItems = storedItems ? JSON.parse(storedItems) : [];
    this.service.restaurantsData.subscribe((data)=>{
      const dataid = this.cartItems.length > 0 ? this.cartItems[0].dataid : null;
      if(data!==""){
          let filterData=(data ?? []).filter((v:any)=>v.id==dataid)
          if(filterData.length>0){
            this.selectedRestro=filterData[0]
            console.log(this.selectedRestro)
          }
        }
    })
    this.itemsprices=this.cartItems.reduce((acc:any,curr:any)=> acc +(curr.price*curr.count),0);
    this.TotalPrice=this.itemsprices+62+76
  }
  DecreaseCount(itemName:any){
    this.cartItems=JSON.parse(localStorage.getItem("itemsCart") || "")
    if(this.cartItems){
      let index=this.cartItems.findIndex((v:any)=>v.name==itemName)
      if(index!=-1 && this.cartItems[index].count>1 ){
        this.cartItems[index].count=(this.cartItems[index].count || 0) -1
        localStorage.setItem("itemsCart",JSON.stringify(this.cartItems))
        this.service.cartItems.next(this.cartItems)
        this.itemsprices=this.cartItems.reduce((acc:any,curr:any)=> acc +(curr.price*curr.count),0);
        this.TotalPrice=this.itemsprices+62+76
      }
        else{
          this.cartItems=this.cartItems.filter((v:any)=>v.name!=itemName)
           if(this.cartItems.length>0){
              localStorage.setItem("itemsCart",JSON.stringify(this.cartItems))
              this.service.cartItems.next(this.cartItems)
              this.itemsprices=this.cartItems.reduce((acc:any,curr:any)=> acc +(curr.price*curr.count),0);
              this.TotalPrice=this.itemsprices+62+76
           }
            else{
              localStorage.removeItem("itemsCart")
               this.service.cartItems.next(this.cartItems)
            }
      }
    }
  }
  IncreaseCount(itemName:any){
    this.cartItems=JSON.parse(localStorage.getItem("itemsCart") || "")
    if(this.cartItems){
      let index=this.cartItems.findIndex((v:any)=>v.name==itemName)
      if(index!=-1){
        this.cartItems[index].count=(this.cartItems[index].count || 0) +1
        localStorage.setItem("itemsCart",JSON.stringify(this.cartItems))
        this.service.cartItems.next(this.cartItems)
      }
      this.itemsprices=this.cartItems.reduce((acc:any,curr:any)=> acc +(curr.price*curr.count),0);
      this.TotalPrice=this.itemsprices+62+76
    }
  }
}
