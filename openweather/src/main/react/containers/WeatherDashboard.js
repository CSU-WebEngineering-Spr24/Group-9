import './WeatherDisplay.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDashboard = () => {
    const [locationType, setLocationType] = useState('city');
    const [selectedCity, setSelectedCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [temperatureUnit, setTemperatureUnit] = useState('Fahrenheit');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [responseErr, setResponseErr] = useState(null)

    useEffect(() => {
        const fetchWeather = async (latitude, longitude) => {
            try {
                let response;
                if (locationType === 'city') {
                    response = await axios.get(`/weather/current?lat=${latitude}&lon=${longitude}`);
                } else {
                    response = await axios.get(`/weather/current?zip=${zipCode}`);
                }

                const weather = response.data;
                setWeatherData(weather);

                // Fetch forecast data after weather data is fetched
                const forecastResponse = await axios.get(`/weather/forecast?lat=${latitude}&lon=${longitude}`);
                const forecast = forecastResponse.data;
                setForecastData(forecast);

            } catch (error) {
                console.error('Error fetching weather data: ', error);
                setResponseErr("Error occurred, please check input data and try again.")
            }
        };

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    fetchWeather(latitude, longitude);
                }, (error) => {
                    console.error('Error getting user location: ', error);
                    setResponseErr(`Display weather info for current browser location failed: ${error.message}`);
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
                setResponseErr('Geolocation is not supported by this browser.');
            }
        };

        getLocation();
    }, []);


    const handleLocationTypeChange = (event) => {
        setLocationType(event.target.value);
        setWeatherData(null);
        setForecastData(null);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setWeatherData(null);
        setForecastData(null);
    };

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
        setWeatherData(null);
        setForecastData(null);
    };

    const handleTemperatureUnitChange = (event) => {
        setTemperatureUnit(event.target.value);
    };

    const convertKelvinToCelsius = (kelvin) => {
        return kelvin - 273.15;
    };

    const convertCelsiusToFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    };

    const renderTemperature = (kelvinTemp) => {
        let temperature = kelvinTemp;
        if (temperatureUnit === 'Celsius') {
            temperature = convertKelvinToCelsius(temperature);
        } else if (temperatureUnit === 'Fahrenheit') {
            temperature = convertCelsiusToFahrenheit(convertKelvinToCelsius(temperature));
        }

        return `${parseFloat(temperature.toFixed(0))}°`;
    };

    const getWeatherIconUrl = (iconCode) => {
        return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    };

    const handleSearch = () => {
        setResponseErr(null);
        if (locationType === 'city') {
            selectedCity.trim() == ""
                ? alert("City name is required")
                : fetchWeatherByCity();
        } else if (locationType === 'zip') {
            zipCode.trim() == ""
                ? alert("Zip code is required")
                : fetchWeatherByZipCode();
        }
    };

    const fetchWeatherByCity = async () => {
        try {
            const response = await axios.get(`/weather/current?city=${selectedCity}`);
            const weather = response.data;
            setWeatherData(weather);

            const forecastResponse = await axios.get(`/weather/forecast?lat=${weather.coord.lat}&lon=${weather.coord.lon}`);
            const forecast = forecastResponse.data;
            setForecastData(forecast);

        } catch (error) {
            console.error('Error fetching weather data: ', error);
            setResponseErr('Error occurred, please check input data and try again.');
        }
    };

    const fetchWeatherByZipCode = async () => {
        try {
            const response = await axios.get(`/weather/current?zip=${zipCode}`);
            const weather = response.data;
            setWeatherData(weather);

            const forecastResponse = await axios.get(`/weather/forecast?lat=${weather.coord.lat}&lon=${weather.coord.lon}`);
            const forecast = forecastResponse.data;
            setForecastData(forecast);

        } catch (error) {
            console.error('Error fetching weather data: ', error);
            setResponseErr('Error occurred, please check input data and try again.');
        }
    };

    return (
        <div className="container mt-3 w-75">
            <h2 className="weather-title">Current Weather by Location</h2>
            <div className="weather-search d-flex flex-wrap justify-content-center">
                <select value={locationType} onChange={handleLocationTypeChange}>
                    <option value="city">City</option>
                    <option value="zip">ZIP Code</option>
                </select>
                {locationType === 'city' ? (
                    <input
                        type="text"
                        value={selectedCity}
                        onChange={handleCityChange}
                        placeholder="Enter city name"
                    />
                ) : (
                    <input
                        type="text"
                        value={zipCode}
                        onChange={handleZipCodeChange}
                        placeholder="Enter ZIP code"
                    />
                )}
                <select value={temperatureUnit} onChange={handleTemperatureUnitChange}>
                    <option value="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                </select>
                <button onClick={handleSearch}>Search</button>
            </div>

            {weatherData ? (
                <div className="pt-2 border d-flex flex-wrap justify-content-evenly">
                    <div className="weather-info d-flex flex-wrap justify-content-center">
                        <img src={getWeatherIconUrl(weatherData.weather[0].icon)} alt="Weather Icon" />
                        <div className='text-center'>
                            <p className="location">{weatherData.name}</p>
                            <p className="temperature">{renderTemperature(weatherData.main.temp)}</p>
                        </div>
                    </div>
                    <div className="weather-details">
                        <p className='text-capitalize'>Condition: {weatherData.weather[0].description}</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Pressure: {weatherData.main.pressure} hPa</p>
                        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                        <p>Wind Direction: {weatherData.wind.deg}°</p>
                        <p>Cloudiness: {weatherData.clouds.all}%</p>
                        <p>Visibility: {weatherData.visibility} meters</p>
                        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                        {/* UV Index might not be present in all API responses, so check before displaying */}
                        {weatherData.uvi && <p>UV Index: {weatherData.uvi}</p>}
                        {/* Include any additional data points you want from the API */}
                    </div>
                </div>
            ) : (
                <p className="text-center fst-italic">{locationType === 'city' ? 'Enter a city name and click Search' : 'Enter a ZIP code and click Search'}</p>
            )}

            {
                responseErr &&
                <p className='text-center text-danger m-3'>{responseErr}</p>
            }

            {forecastData && (
                <div>
                    <h2 className="weather-title">3 Hour / 5 Day Forecast</h2>
                    <div className="forecast-container d-flex flex-wrap justify-content-around">
                        {forecastData.list.map((forecast, index) => (
                            <div key={index} className="forecast-item">
                                <div className="weather-info d-flex flex-wrap justify-content-center">
                                    <img src={getWeatherIconUrl(forecast.weather[0].icon)} alt="Weather Icon" />
                                    <div className='text-center'>
                                        <p>{forecast.dt_txt}</p>
                                        <p className="temperature">{renderTemperature(forecast.main.temp)}</p>
                                    </div>
                                </div>
                                <div className="weather-details">
                                    <p className='text-capitalize'>Condition: {forecast.weather[0].description}</p>
                                    <p>Wind Speed: {forecast.wind.speed} m/s</p>
                                    <p>Wind Direction: {forecast.wind.deg}°</p>
                                    <p>Cloudiness: {forecast.clouds.all}%</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}

export default WeatherDashboard;