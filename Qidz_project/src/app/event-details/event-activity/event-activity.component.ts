import { Component, OnInit } from '@angular/core';
import aData from "./activity-data.json";
@Component({
  selector: 'app-event-activity',
  templateUrl: './event-activity.component.html',
  styleUrls: ['./event-activity.component.css']
})
export class EventActivityComponent implements OnInit {

  constructor() { }
 aVal = aData;
  ngOnInit(): void {
  }

}
