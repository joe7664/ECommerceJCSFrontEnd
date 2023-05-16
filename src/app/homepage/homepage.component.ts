import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  products: Product[]=[];
  constructor(private loginService:LoginService, private route:Router, private productService:ProductService, private cartService:CartService){
    if (this.loginService.id == 0) {
      this.route.navigate(['/login'])
    }
  }

  ngOnInit() {
    if (this.loginService.id == 0) {
      this.route.navigate(['/login'])
    }
    this.productService.getProducts().subscribe(json => this.products = json);
  }
  addToCart(productId:number){
    this.cartService.addToCart(productId).subscribe(json => console.log(json));
  }
}
