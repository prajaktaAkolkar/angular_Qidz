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
    EventComponent
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
