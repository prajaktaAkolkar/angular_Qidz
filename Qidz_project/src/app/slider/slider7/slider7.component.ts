import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import sData from '../slider4/data.json';
@Component({
  selector: 'app-slider7',
  templateUrl: './slider7.component.html',
  styleUrls: ['./slider7.component.css']
})
export class Slider7Component implements OnInit {

  constructor() { }
  sliderVal = sData;
  ngOnInit(): void {
  }


  bannerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin : 20,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
