import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutModule} from "../about/about.module";
import {NavbarModule} from "../../shared/navbar/navbar.module";
import {FooterModule} from "../../shared/footer/footer.module";
import { FetchjsonPipe } from '../../pipes/fetchjson.pipe';



@NgModule({
  declarations: [
    FetchjsonPipe
  ],
  exports: [
    FetchjsonPipe
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule
  ]
})
export class ProjectsModule { }
