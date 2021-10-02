import { productsType } from './../../products.modal';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cart: productsType =[]

  constructor(private cartService:CartService) {
    this.cart = this.cartService.getCart();
   }

  ngOnInit(): void {
  }

  getCounter(){
    return this.cartService.getCounter();
  }

  getSumPrice(){
    return this.cartService.getsumPrice();
  }

}
