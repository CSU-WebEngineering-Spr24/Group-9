package com.example.openweather.service;

import com.example.openweather.domain.CurrentWeather;
import com.example.openweather.domain.ForecastWeather;

public interface WeatherService {

    CurrentWeather fetchCurrent(String city, String zip, String lat, String lon);

    ForecastWeather fetchForecast(String lat, String lon);

}