import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {
  
  cartCount = 0

  addCart(){      
      this.cartCount ++
  }

  removeCart(){
      this.cartCount --
  }

}
