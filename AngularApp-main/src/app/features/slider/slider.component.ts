import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  imageObject = [{
    image: './assets/cards/hermione.jpg',
    thumbImage: './assets/cards/hermione.jpg',
    title: 'Hermiona'
  }, {
    image: './assets/cards/birthday.jpg',
    thumbImage: './assets/cards/birthday.jpg'
  }, {
    image: './assets/cards/swieta1.jpg',
    thumbImage: './assets/cards/swieta1.jpg'
  },{
    image: './assets/cards/swieta2.jpg',
    thumbImage: './assets/cards/swieta2.jpg',
    title: 'kartka swieta'
  }, {
    image: './assets/cards/zaproszenie.jpg',
    thumbImage: './assets/cards/zaproszenie.jpg'
  }];

  ngOnInit(): void {
  }

}
