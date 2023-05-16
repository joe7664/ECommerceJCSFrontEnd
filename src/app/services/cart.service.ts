import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/Product";
import { LoginService } from "./login.service";

@Injectable({
    providedIn:'root'
})
export class CartService{
    product: Product = {
        productId: 0.,
        productName: "",
        description: "",
        price: 0,
        quantity: 0,
        subTotal: 0
    }

    header: HttpHeaders = new HttpHeaders();

    constructor(private httpClient: HttpClient, private loginService:LoginService){
        this.header.append("accept", "text/json");
        this.header.append("Access-Control-Allow-Origin", "*");
    }

    getCart(): Observable<any> {
        return this.httpClient.get("http://localhost:9000/cart/"+this.loginService.id, {headers: this.header});
    }
    addToCart(productId:number | Product): Observable<any>{
        return this.httpClient.post<Product>("http://localhost:9000/cart/"+this.loginService.id+"/"+productId, {headers: this.header, responseType:'text'});
    }
    updateQuantity(productId:number, quantity:number): Observable<any> {
        return this.httpClient.patch<Product>("http://localhost:9000/cart/"+this.loginService.id+"/"+productId+"/"+quantity, {headers: this.header, responseType:'text'});
    }
    clearCart(): Observable<any>{
        return this.httpClient.delete("http://localhost:9000/cart/"+this.loginService.id, {headers: this.header, responseType:'text'});
    }
}