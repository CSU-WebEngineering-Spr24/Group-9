package com.example.openweather.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.openweather.domain.CurrentWeather;
import com.example.openweather.domain.ForecastWeather;
import com.example.openweather.service.WeatherService;

@RestController
@RequestMapping("/weather")
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping("/current")
    public CurrentWeather getCurrentWeather(
            @RequestParam(name = "city", required = false) String city,
            @RequestParam(name = "zip", required = false) String zip,
            @RequestParam(name = "lat", required = false) String lat,
            @RequestParam(name = "lon", required = false) String lon) {

        return weatherService.fetchCurrent(city, zip, lat, lon);
    }

    @GetMapping("/forecast")
    public ForecastWeather getWeatherForecast(
            @RequestParam(name = "lat") String lat,
            @RequestParam(name = "lon") String lon) {

        return weatherService.fetchForecast(lat, lon);
    }
}
