import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventDetailsComponent} from './event-details/event-details.component';
import {Slider1Component} from './slider/slider1/slider1.component';
import { HeroBgComponent } from './middle-section/hero-bg/hero-bg.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {EventListingComponent} from './event-listing/event-listing.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {ScorePointsComponent} from './score-points/score-points.component';
import {KidsComponent} from './kids/kids.component';
import {FavouriteComponent} from './favourite/favourite.component';
import {RegisterationComponent} from './registeration/registeration.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  {
    
    path: 'event_details', component : EventDetailsComponent
  },
  {
    
    path: 'search-result', component : SearchResultComponent
  },
  {
   path : 'event_listing' , component : EventListingComponent
  },
  {
    path :'user-profile' , component : UserProfileComponent
  },
  {
    path : 'edit-profile' , component : EditProfileComponent
   },
   {
    path : 'score-point' , component : ScorePointsComponent
   },
   {
     path : 'kids' , component : KidsComponent
   },
   {
     path : 'Favourite' , component : FavouriteComponent
   },
   {
     path :'register' ,component : RegisterationComponent
   },
   {
    path :'login' ,component : LoginComponent
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
