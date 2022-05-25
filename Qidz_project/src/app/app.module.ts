import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
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
    CreateFamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
