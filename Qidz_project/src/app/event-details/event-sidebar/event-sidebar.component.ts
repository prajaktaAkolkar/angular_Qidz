import { Component, OnInit } from '@angular/core';
import Sdata from './sidebar-data.json';
@Component({
  selector: 'app-event-sidebar',
  templateUrl: './event-sidebar.component.html',
  styleUrls: ['./event-sidebar.component.css']
})
export class EventSidebarComponent implements OnInit {

  constructor() { }
  eData = Sdata;
  ngOnInit(): void {
  }

}
