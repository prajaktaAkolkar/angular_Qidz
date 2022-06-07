import { Component, OnInit } from '@angular/core';
import FavData from './fav-data.json';
@Component({
  selector: 'app-fav-activites',
  templateUrl: './fav-activites.component.html',
  styleUrls: ['./fav-activites.component.css']
})
export class FavActivitesComponent implements OnInit {

  constructor() { }
  fData = FavData;
  ngOnInit(): void {
  }

}
