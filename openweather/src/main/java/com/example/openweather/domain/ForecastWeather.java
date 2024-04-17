package com.example.openweather.domain;

import java.util.List;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ForecastWeather {
    private String cod;
    private int message;
    private int cnt;
    private List<Map<String, Object>> list;
    private Map<String, Object> city;
}
