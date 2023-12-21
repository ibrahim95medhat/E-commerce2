import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {
id!:string;
count:number=0
addToCartFlag:BehaviorSubject<number>=new BehaviorSubject(this.count);
  constructor(private _HttpClient:HttpClient) { }


getAllProducts():Observable<any>{
 return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/products")
}
getdetailedProduct(id:string):Observable<any>{
 return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

addToCartCount():BehaviorSubject<number>{
  this.addToCartFlag.next(++this.count);
  return this.addToCartFlag;
}

}
