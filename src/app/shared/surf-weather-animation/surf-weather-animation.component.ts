import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surf-weather-animation',
  templateUrl: './surf-weather-animation.component.html',
  styleUrls: ['./surf-weather-animation.component.scss']
})
export class SurfWeatherAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show: boolean = true;
  hide: boolean = false;


}
