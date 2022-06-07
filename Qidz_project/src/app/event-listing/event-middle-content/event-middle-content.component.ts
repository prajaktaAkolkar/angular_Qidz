import { Component, OnInit } from '@angular/core';
import eventData from './event-data.json';

@Component({
  selector: 'app-event-middle-content',
  templateUrl: './event-middle-content.component.html',
  styleUrls: ['./event-middle-content.component.css']
})
export class EventMiddleContentComponent implements OnInit {

  constructor() { }
 eData = eventData;
  ngOnInit(): void {
  }

}
