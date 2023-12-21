import { Component } from '@angular/core';
import { TrendyProductsComponent } from '../trendy-products/trendy-products.component';
import { DealsComponent } from '../deals/deals.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [TrendyProductsComponent,DealsComponent,ProductComponent],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {

}
