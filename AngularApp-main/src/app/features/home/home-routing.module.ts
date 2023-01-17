import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "../about/about.component";
import {ProjectsComponent} from "../projects/projects.component";
import {FavouritesComponent} from "../favourites/favourites.component";
import {CartComponent} from "../cart/cart.component";

export const Route = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'cart', component: CartComponent}
])
