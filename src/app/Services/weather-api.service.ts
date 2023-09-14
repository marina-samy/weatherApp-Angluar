import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  apiKey = '237a89f7ff0f29d8f83bfcabc76fa017';

  constructor( private http: HttpClient) { }

  getWeatherData(cityName: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`)
  }
}
