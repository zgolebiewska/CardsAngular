import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarModule} from "../../shared/navbar/navbar.module";
import {Route} from "../home/home-routing.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    Route
  ]
})
export class FavouritesModule { }
