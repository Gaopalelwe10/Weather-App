import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // city='Pretoria';
  appid='your key';

  constructor(private http: HttpClient) { }

  getWeatherData(city: string){
   return this.http.get('http://api.openweathermap.org/data/2.5/forecast?&units=metric&q=' + city + '&APPID=' + this.appid)
  }

  getCities(){
    // return this.http.get<any[]>('http://jsonplaceholder.typicode.com/albums');
    return this.http.get<any[]>('/assets/city.list.json')
  }
}
