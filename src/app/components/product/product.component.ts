import { ProdServiceService } from './../../services/prod-service.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit  {
products!:any[];
id!:string;
counter:number=0;
flag!:any;
constructor(private _Router:Router ,private _ProdServiceService:ProdServiceService  ){

}

ngOnInit(): void {
this._ProdServiceService.getAllProducts().subscribe({
  next:(res)=>{
    this.products=res.data;
    this.id=res.data;
    console.log(res.data);
  },
  error:(err)=>{
console.log(err);
  }
})
}

  detailedProduct(id:string){
this._Router.navigate([`/${id}`]);
  }

  addToCart(){
this._ProdServiceService.addToCartCount().subscribe((res)=>{
  console.log(res)
})

  }
}
