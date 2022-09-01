import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Mainportal/Home/home/home.component';
import { ShopComponent } from './Mainportal/shop/shop/shop.component';
import { UnstitchedComponent } from './Mainportal/Unstitched/unstitched/unstitched.component';


const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'shop', component:ShopComponent},
  {path:'Unstitched',component:UnstitchedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
