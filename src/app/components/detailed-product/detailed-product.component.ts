import { ProdServiceService } from './../../services/prod-service.service';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faDollar} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-detailed-product',
  standalone: true,
  imports: [FontAwesomeModule,TranslateModule,CommonModule],
  templateUrl: './detailed-product.component.html',
  styleUrl: './detailed-product.component.scss'
})
export class DetailedProductComponent implements OnInit {
  faCartShopping=faCartShopping;
  faDollar=faDollar;
id!:string;
detailedProduct!:any
images!:string[];
counter:number=0;
  constructor(private _ProdServiceService:ProdServiceService , private _ActivatedRoute:ActivatedRoute){
  }

ngOnInit(): void {
  this.getDetailedProductId()

this._ProdServiceService.getdetailedProduct(this.id).subscribe({
  next:(res)=>{
console.log(res.data);
this.detailedProduct=res.data;
this.images=res.data.images;
  },
  error:(err)=>{
    console.log(err)
  }
})
}
addToCart(){
  this._ProdServiceService.addToCartCount().subscribe((res)=>{
    console.log(res)
    })
  }

getDetailedProductId(){
  this._ActivatedRoute.params.subscribe((res)=>{
   console.log(res['id']);
   this.id=res['id']
   return res['id']
  })
}
}