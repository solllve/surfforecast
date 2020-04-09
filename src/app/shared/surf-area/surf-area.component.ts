import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../../services/weather-data.service';
import map from 'lodash/map';
import get from 'lodash/get';

@Component({
  selector: 'app-surf-area',
  templateUrl: './surf-area.component.html',
  styleUrls: ['../surf-spot/surf-spot.component.scss']
})
export class SurfAreaComponent implements OnInit {

  constructor(
    public _weatherService:  WeatherDataService
  ) { }

  ngOnInit() {
  }

}
