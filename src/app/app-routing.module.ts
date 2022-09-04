import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './Mainportal/collection/collection/collection.component';
import { HeaderComponent } from './Mainportal/Header/header/header.component';
import { HomeComponent } from './Mainportal/Home/home/home.component';
import { LoginComponent } from './Mainportal/login/login/login.component';
import { PagenotfoundComponent } from './Mainportal/pagenotfound/pagenotfound/pagenotfound.component';
import { ReviewsComponent } from './Mainportal/reviews/reviews/reviews.component';
import { ShopComponent } from './Mainportal/shop/shop/shop.component';
import { UnstitchedComponent } from './Mainportal/Unstitched/unstitched/unstitched.component';


const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'header', component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'shop', component:ShopComponent},
  {path:'Unstitched',component:UnstitchedComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'collection',component:CollectionComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
