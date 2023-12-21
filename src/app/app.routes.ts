import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:':id',component:DetailedProductComponent},

]
