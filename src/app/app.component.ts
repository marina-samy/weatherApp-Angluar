import { Component, OnInit  } from '@angular/core';
import { WeatherAPIService } from './Services/weather-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  cityName : string = 'cairo';
  weatherData: any;

  constructor(private API : WeatherAPIService){}

  ngOnInit() {
    this.getWeather(); 
  }

  getWeather() {
    this.API.getWeatherData(this.cityName)
      .subscribe(data => {
        this.weatherData = data;
        console.log(data);
      });
  }


  getBackgroundStyle() {
    if (this.weatherData && this.weatherData.main) {
      const temp = this.weatherData.main.temp;

      if (temp <= 0) {
        return { 'background-image': 'linear-gradient(to bottom, #DEE7EC, #C9DBE9, #79AAC5, #7BA1B6, #5C7E95)' };
      } else if (temp < 300) {
        return { 'background-image': 'linear-gradient(to bottom, #0c287c, #53589C, #8C88B8, #7B67A2, #9872A1, #B997B6 )' };
      } else {
        return { 'background-image': 'linear-gradient(to bottom, #E2CAC8, #e9d1cf, #FFE9AF,#FFE9AF, #BDC2E5, #9CB4E2, #349BDA)' };
      }
    }
    return {};
  }

}
