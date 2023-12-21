import { TranslateService } from '@ngx-translate/core';
import { ProdServiceService } from './../../services/prod-service.service';
import { Component, Renderer2, ElementRef, AfterViewInit, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule,TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  faUser=faUser;
  faCartShopping=faCartShopping;
  faHeart=faHeart;
  faBars=faBars;
  faAngleDown=faAngleDown;
  faAngleUp=faAngleUp;
productNumber!:number;
languageDirection:string=localStorage.getItem("lang")|| 'ltr';
  constructor(private _ProdServiceService:ProdServiceService ,public translate:TranslateService){
  _ProdServiceService.addToCartFlag.subscribe((res)=>{
this.productNumber=res;
})
  }

  ngOnInit(): void {
    this.checkLanguage()
  }

checkLanguage(){
  this.languageDirection==='ltr' ? this.translate.use("en") : this.translate.use("ar");
}


  toggleLanguage(){

if(this.languageDirection==='ltr'){
  localStorage.setItem("lang",'rtl')
  this.translate.use("ar");
  this.languageDirection='rtl';
}else{
  localStorage.setItem("lang",'rtl')
  localStorage.setItem("lang",'ltr')
  this.translate.use("en");
  this.languageDirection='ltr';
}

  }
}
