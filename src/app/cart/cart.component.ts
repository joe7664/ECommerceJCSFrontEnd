import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: Product[]=[];
  total: number=0;
  totalNum: string="";
  ready: boolean=false;

  constructor(private loginService:LoginService, private route:Router, private cartService:CartService){
    if (this.loginService.id == 0) {
      this.route.navigate(['/login'])
    }
  }

  ngOnInit() {
    if (this.loginService.id == 0) {
      this.route.navigate(['/login'])
    }
    this.cartService.getCart().subscribe(json => {
      let tempCart:Product[]=[];
      for(let p of json){
        p.subTotal=p.quantity*p.price;
        this.total=this.total+p.subTotal;
        p.subTotal=parseFloat(p.subTotal).toFixed(2);
        this.totalNum=parseFloat(String(this.total)).toFixed(2);
        tempCart.push(p);
      }
      this.products=tempCart;});
  }
  addToCart(productId:number){
    this.cartService.addToCart(productId).subscribe(json => console.log(json));
  }
  updateQuantity(productId:number, quantity:number){
    this.cartService.updateQuantity(productId, quantity).subscribe(json => {console.log(json); });location.reload()
  }
  async clearCart(){
    this.totalNum="0";
    this.cartService.clearCart().subscribe(json => {console.log(json);
      setTimeout(this.changeReady, 5000)});
    
  }
  changeReady(){
    this.ready=false;
    location.reload();
  }
}

