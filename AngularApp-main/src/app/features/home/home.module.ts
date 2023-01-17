import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarModule} from "../../shared/navbar/navbar.module";
import {HomeComponent} from "./home.component";
import {FooterModule} from "../../shared/footer/footer.module";
import {NewsModule} from "../news/news.module";
import {SliderModule} from "../slider/slider.module";
import {Route} from "./home-routing.module";


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    NewsModule,
    SliderModule,
    Route
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
