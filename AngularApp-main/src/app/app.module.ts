import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {HomeModule} from "./features/home/home.module";
import {NavbarModule} from "./shared/navbar/navbar.module";
import {SliderModule} from "./features/slider/slider.module";
import {NewsModule} from "./features/news/news.module";
import {NgxPageScrollCoreModule} from "ngx-page-scroll-core";
import { FooterComponent } from './shared/footer/footer.component';
import {FooterModule} from "./shared/footer/footer.module";
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import {Route} from "./app-routing.module";
import {ProjectsModule} from "./features/projects/projects.module";
import { FavouritesComponent } from './features/favourites/favourites.component';
import { CartComponent } from './features/cart/cart.component';
import {CartModule} from "./features/cart/cart.module";
import {StoreModule} from "@ngrx/store";
import {CounterModule} from "./store/modules/counter.module";
import {counterReducer} from "./store/reducers/counter.reducer";
import { ScrollDirective } from './features/projects/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    FavouritesComponent,
    CartComponent,
    ScrollDirective
  ],
  imports: [
    NgxPageScrollCoreModule,
    BrowserModule,
    HomeModule,
    Route,
    NavbarModule,
    FooterModule,
    ProjectsModule,
    CartModule,
    StoreModule.forRoot({count: counterReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
