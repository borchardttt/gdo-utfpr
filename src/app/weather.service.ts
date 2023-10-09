import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'fd0db44b54a650549ae01dbaf028d8fd'; // Substitua pela sua chave da API OpenWeatherMap
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private city = 'Guarapuava';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    const url = `${this.apiUrl}?q=${this.city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
