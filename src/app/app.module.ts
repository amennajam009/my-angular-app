import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Mainportal/Header/header/header.component';
import { HomeComponent } from './Mainportal/Home/home/home.component';
import { FooterComponent } from './Mainportal/Footer/footer/footer.component';
import { LinkComponent } from './Mainportal/link/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LinkComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
