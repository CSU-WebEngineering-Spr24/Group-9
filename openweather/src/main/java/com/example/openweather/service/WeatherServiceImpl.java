package com.example.openweather.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.openweather.domain.CurrentWeather;
import com.example.openweather.domain.ForecastWeather;

@Service
public class WeatherServiceImpl implements WeatherService {

    private static final String OPENWEATHERMAP_BASE_URL = "https://api.openweathermap.org/data/2.5";
    private static final String API_KEY = "f5de623a22205640e2080954fa168020";

    @Override
    public CurrentWeather fetchCurrent(String city, String zip, String lat, String lon) {
        RestTemplate restTemplate = new RestTemplate();

        StringBuilder apiUrl = new StringBuilder(OPENWEATHERMAP_BASE_URL);
        apiUrl.append("/weather?appid=").append(API_KEY);

        if (city != null) {
            apiUrl.append("&q=").append(city);
        }
        if (zip != null) {
            apiUrl.append("&zip=").append(zip);
        }
        if (lat != null && lon != null) {
            apiUrl.append("&lat=").append(lat).append("&lon=").append(lon);
        }

        CurrentWeather response = restTemplate.getForObject(apiUrl.toString(), CurrentWeather.class);

        // Log the response
        System.out.println("OpenWeatherMap Current Weather API Response: " + response);

        return response;
    }

    @Override
    public ForecastWeather fetchForecast(String lat, String lon) {
        RestTemplate restTemplate = new RestTemplate();

        StringBuilder apiUrl = new StringBuilder(OPENWEATHERMAP_BASE_URL);
        apiUrl.append("/forecast?lat=").append(lat).append("&lon=").append(lon);
        apiUrl.append("&appid=").append(API_KEY);

        ForecastWeather response = restTemplate.getForObject(apiUrl.toString(), ForecastWeather.class);

        // Log the response
        System.out.println("OpenWeatherMap Forecast API Response: " + response);

        return response;
    }
}
