import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {
  
  cartCount = 0
  disableAdd : boolean = false;
  disableRemove : boolean = true;

  addCart(cartvalue : number){

    if(cartvalue < 5){
      
      this.cartCount ++
      this.disableRemove = false;

    }else{
      this.disableAdd = true;
    }
    
  }

  removeCart(cartvalue : number){
    
    if(cartvalue > 0){
      this.cartCount --
      this.disableAdd = false;
    }else{
      this.disableRemove = true;
    }
    
  }


}
