import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor( ) {
  }

  @HostListener('click')
  moveTop(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
}
