import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Mainportal/Header/header/header.component';
import { HomeComponent } from './Mainportal/Home/home/home.component';

import { LinkComponent } from './Mainportal/link/link/link.component';
import { FooterComponent } from './Mainportal/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
   
    LinkComponent,
        FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
