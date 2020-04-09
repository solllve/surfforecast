import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class WeatherDataService {
  surfSpotsObj;
  constructor(public _http: HttpClient) {
  }

  public getSurfSpots() {
    return this._http.get('/api/county/spots/orange-county/').toPromise();
  }

  public getSurfWaves(spot): Promise<any> {
    return this._http.get('/api/spot/forecast/'+ spot).toPromise();
  }



}
