import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { SurfSpotComponent } from './shared/surf-spot/surf-spot.component';
import { HttpClientModule } from '@angular/common/http';
import { SurfAreaComponent } from './shared/surf-area/surf-area.component';
import { SurfSizeComponent } from './shared/surf-size/surf-size.component';
import { OrderWavesPipe } from './order-waves.pipe';
import { SurfWeatherAnimationComponent } from './shared/surf-weather-animation/surf-weather-animation.component';
import { OvercastComponent } from './shared/surf-weather-animation/overcast/overcast.component';
import { SunnyComponent } from './shared/surf-weather-animation/sunny/sunny.component';
import { NightComponent } from './shared/surf-weather-animation/night/night.component';
import { RainComponent } from './shared/surf-weather-animation/rain/rain.component';
import { SunsetComponent } from './shared/surf-weather-animation/sunset/sunset.component';
import { SunriseComponent } from './shared/surf-weather-animation/sunrise/sunrise.component';
import { SurfPrepDetailsComponent } from './shared/surf-prep-details/surf-prep-details.component';
import { SurfPrepDetailsMobileComponent } from './shared/surf-prep-details-mobile/surf-prep-details-mobile.component';
import { SurfWeatherMobileComponent } from './shared/surf-weather-mobile/surf-weather-mobile.component';
import { SurfSpotMobileComponent } from './shared/surf-spot-mobile/surf-spot-mobile.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SurfSpotComponent,
    SurfAreaComponent,
    SurfSizeComponent,
    OrderWavesPipe,
    SurfWeatherAnimationComponent,
    OvercastComponent,
    SunnyComponent,
    NightComponent,
    RainComponent,
    SunsetComponent,
    SunriseComponent,
    SurfPrepDetailsComponent,
    SurfPrepDetailsMobileComponent,
    SurfWeatherMobileComponent,
    SurfSpotMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
