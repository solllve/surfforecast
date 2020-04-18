import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { WeatherDataService } from '../../../services/weather-data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import map from 'lodash/map';
import get from 'lodash/get';

@Component({
  selector: 'app-surf-size',
  template: `
  <div class="wave__height">
    <span class="wave__height--measure">3 - 5</span>
    <span class="wave__height--ft">ft</span>
  </div>
`,
  styleUrls: ['../surf-spot/surf-spot.component.scss']
})

export class SurfSizeComponent implements OnInit {
//  waveArray = [];
//  waveSizes = [];
//  exampleOutput;
  constructor(
    public _weatherService:  WeatherDataService
  ) {

   }

  ngOnInit() {

  //  this._weatherService.getSurfSpots()
  //  .then((surfSpotData: any) => {
  //    var data = {};
  //    data = surfSpotData.map(spotIds =>
  //      this.getSurfWaveSize(get(spotIds, 'spot_id'))
  //    );
  //  })

  }

  ngAfterViewInit() {


  }

  //getSurfWaveSize(spot) {
  //  this._weatherService.getSurfWaves(spot)
  //  .then((forecastData: any) => {
  //    let waveTest = [];
  //    let date = new Date();
  //    let hours = date.getHours()
  //    let ampm = hours >= 12 ? 'PM' : 'AM';
  //    let standardhours = ((hours + 11) % 12 + 1);
  //    let todaysForecast = forecastData.filter(forecast => get(forecast,'hour') == standardhours + ampm);

  //    this.waveArray.push(
  //      {
  //      spotName: get(todaysForecast[0], 'spot_name'),
  //      waveSize: get(todaysForecast[0], 'size_ft'),
  //      lat: get(todaysForecast[0], 'latitude'),
  //      long: get(todaysForecast[0], 'longitude'),
  //      shape: get(todaysForecast[0].shape_detail, 'swell')
  //      }
  //    );

  //    this.waveSizes.push(
  //      get(todaysForecast[0], 'size_ft')
  //    );

  //  });

  //}



}
