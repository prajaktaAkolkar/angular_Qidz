import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule ,routecompt } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { QidzHeaderComponent } from './qidz-header/qidz-header.component';
import { UpperFooterComponent } from './footer/upper-footer/upper-footer.component';
import { LowerFooterComponent } from './footer/lower-footer/lower-footer.component';
import { SearchComponent } from './middle-section/search/search.component';
import { HeroBgComponent } from './middle-section/hero-bg/hero-bg.component';
import { Slider1Component } from './slider/slider1/slider1.component';
import { Slider2Component } from './slider/slider2/slider2.component';
import { Slider3Component } from './slider/slider3/slider3.component';
import { Slider4Component } from './slider/slider4/slider4.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { CreateFamilyComponent } from './create-family/create-family.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestSliderComponent } from './slider/test-slider/test-slider.component';
import { Slider5Component } from './slider/slider5/slider5.component';
import { Slider6Component } from './slider/slider6/slider6.component';
import { Slider7Component } from './slider/slider7/slider7.component';
import { TravelSecComponent } from './travel-sec/travel-sec.component';
import { HttpClientModule} from '@angular/common/http';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventComponent } from './event-details/event/event.component';
import { EventFilterComponent } from './event-details/event-filter/event-filter.component';
import { EventSidebarComponent } from './event-details/event-sidebar/event-sidebar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { LeftSidebarComponent } from './search-result/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './search-result/right-sidebar/right-sidebar.component';
import { MiddleSectionComponent } from './search-result/middle-section/middle-section.component';
import { EventContentComponent } from './event-details/event-content/event-content.component';
import { EventActivityComponent } from './event-details/event-activity/event-activity.component';
import { EventDescriptionComponent } from './event-details/event-description/event-description.component';
import { EventReviewComponent } from './event-details/event-review/event-review.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventHomeComponent } from './event-listing/event-home/event-home.component';
import { EventMiddleContentComponent } from './event-listing/event-middle-content/event-middle-content.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileHeaderComponent } from './user-profile/profile-header/profile-header.component';
import { ProfileSidebarComponent } from './user-profile/profile-sidebar/profile-sidebar.component';
import { ProfileMainContetntComponent } from './user-profile/profile-main-contetnt/profile-main-contetnt.component';
import { BioGraphComponent } from './user-profile/bio-graph/bio-graph.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditMainContentComponent } from './edit-profile/edit-main-content/edit-main-content.component';
import { EditBioProfileComponent } from './edit-profile/edit-bio-profile/edit-bio-profile.component';
import { BalanceSectionComponent } from './edit-profile/balance-section/balance-section.component';
import { ScorePointsComponent } from './score-points/score-points.component';
import { ScroeMainContentComponent } from './score-points/scroe-main-content/scroe-main-content.component';
import { HowToScoreContentComponent } from './score-points/how-to-score-content/how-to-score-content.component';
import { KidsComponent } from './kids/kids.component';
import { KidsMiddleSectionComponent } from './kids/kids-middle-section/kids-middle-section.component';
import { KidsInfoSectionComponent } from './kids/kids-info-section/kids-info-section.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FavMiddleContentComponent } from './favourite/fav-middle-content/fav-middle-content.component';
import { FavActivitesComponent } from './favourite/fav-activites/fav-activites.component';
import { RegisterationComponent } from './registeration/registeration.component';
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    QidzHeaderComponent,
    UpperFooterComponent,
    LowerFooterComponent,
    SearchComponent,
    HeroBgComponent,
    Slider1Component,
    Slider2Component,
    Slider3Component,
    Slider4Component,
    DownloadAppComponent,
    CreateFamilyComponent,
    TestSliderComponent,
    Slider5Component,
    Slider6Component,
    Slider7Component,
    TravelSecComponent,
    EventDetailsComponent,
    routecompt,
    EventComponent,
    EventFilterComponent,
    EventSidebarComponent,
    SearchResultComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MiddleSectionComponent,
    EventContentComponent,
    EventActivityComponent,
    EventDescriptionComponent,
    EventReviewComponent,
    EventListingComponent,
    EventHomeComponent,
    EventMiddleContentComponent,
    UserProfileComponent,
    ProfileHeaderComponent,
    ProfileSidebarComponent,
    ProfileMainContetntComponent,
    BioGraphComponent,
    EditProfileComponent,
    EditMainContentComponent,
    EditBioProfileComponent,
    BalanceSectionComponent,
    ScorePointsComponent,
    ScroeMainContentComponent,
    HowToScoreContentComponent,
    KidsComponent,
    KidsMiddleSectionComponent,
    KidsInfoSectionComponent,
    FavouriteComponent,
    FavMiddleContentComponent,
    FavActivitesComponent,
    RegisterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
