import { TranslateModule } from '@ngx-translate/core';
import { MainHomeComponent } from './../main-home/main-home.component';
import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductComponent } from '../product/product.component';
import { DealsComponent } from '../deals/deals.component';
import { AdvertismentComponent } from '../advertisment/advertisment.component';
import { CarsoulComponent } from '../carsoul/carsoul.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainHomeComponent,TranslateModule ,CarsoulComponent ,CategoriesComponent,ProductComponent,DealsComponent,AdvertismentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
