import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from "@ngx-translate/core";
import { HttpLoaderFactory } from './app.config';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,TranslateModule,HttpClientModule, RouterOutlet,HomeComponent,DetailedProductComponent,NavbarComponent,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';
  faCoffee=faCoffee;

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    // translate.use('en');

  }



  // switchLanguage(lang:string){
  //  this.translate.use(lang);
  // }
}
