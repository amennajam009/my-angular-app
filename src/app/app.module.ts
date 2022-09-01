import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Mainportal/Header/header/header.component';
import { HomeComponent } from './Mainportal/Home/home/home.component';


import { FooterComponent } from './Mainportal/footer/footer/footer.component';
import { ShopComponent } from './Mainportal/shop/shop/shop.component';
import { UnstitchedComponent } from './Mainportal/Unstitched/unstitched/unstitched.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShopComponent,
    UnstitchedComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
