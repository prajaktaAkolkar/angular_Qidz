import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventDetailsComponent} from './event-details/event-details.component';
import {Slider1Component} from './slider/slider1/slider1.component';
import { HeroBgComponent } from './middle-section/hero-bg/hero-bg.component';

const routes: Routes = [
  {
    
    path: 'event_details', component : EventDetailsComponent
  },
  {
    
    path: '', component : HeroBgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routecompt = [EventDetailsComponent];
