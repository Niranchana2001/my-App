import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {

  cardCount = 0

  addCart(){
    this.cardCount ++
  }

  removeCart(){
    this.cardCount --
  }

}
