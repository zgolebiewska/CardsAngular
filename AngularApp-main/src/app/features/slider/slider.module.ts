import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgImageSliderModule } from 'ng-image-slider';
import {SliderComponent} from "./slider.component";




@NgModule({
  declarations: [SliderComponent],
  exports: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule
  ]
})
export class SliderModule { }
