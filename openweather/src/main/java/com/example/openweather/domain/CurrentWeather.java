package com.example.openweather.domain;

import java.util.List;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CurrentWeather {
    private Map<String, Double> coord;
    private List<Map<String, Object>> weather;
    private String base;
    private Map<String, Double> main;
    private int visibility;
    private Map<String, Double> wind;
    private Map<String, Integer> clouds;
    private long dt;
    private Map<String, Object> sys;
    private int timezone;
    private int id;
    private String name;
    private int cod;
}
