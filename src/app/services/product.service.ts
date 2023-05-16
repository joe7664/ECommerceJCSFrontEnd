import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/Product";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    product: Product = {
        productId: 0.,
        productName: "",
        description: "",
        price: 0,
        quantity: 0,
        subTotal: 0
    }

    header: HttpHeaders = new HttpHeaders();

    constructor(private httpClient: HttpClient){
        this.header.append("accept", "text/json");
        this.header.append("Access-Control-Allow-Origin", "*");
    }

    getProducts(): Observable<any> {
        return this.httpClient.get("http://localhost:9000/home", {headers: this.header});
    }
    getProductById(productId:number | Product): Observable<any>{
        return this.httpClient.get("http://localhost:9000/product/"+productId, {headers: this.header});
    }
}