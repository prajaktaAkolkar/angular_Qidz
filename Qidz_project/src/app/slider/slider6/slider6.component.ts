import { Component, OnInit } from '@angular/core';
import data from './slider6.json';
@Component({
  selector: 'app-slider6',
  templateUrl: './slider6.component.html',
  styleUrls: ['./slider6.component.css']
})
export class Slider6Component implements OnInit {

  constructor() { }
slider6 = data;
  ngOnInit(): void {
  }


}
