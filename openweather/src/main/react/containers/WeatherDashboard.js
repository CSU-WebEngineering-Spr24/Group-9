import './WeatherDisplay.css';
import React, { useState } from 'react';

const WeatherDashboard = () => {
    const [locationType, setLocationType] = useState('city');
    const [selectedCity, setSelectedCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [temperatureUnit, setTemperatureUnit] = useState('Fahrenheit');

    const handleLocationTypeChange = (event) => {
        setLocationType(event.target.value);
        // setWeatherData(null);
        // setForecastData(null);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        // setWeatherData(null);
        // setForecastData(null);
    };

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
        // setWeatherData(null);
        // setForecastData(null);
    };

    const handleTemperatureUnitChange = (event) => {
        setTemperatureUnit(event.target.value);
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
                <button onClick={() => null}>Search</button>
            </div>

            <div className="pt-2 border d-flex flex-wrap justify-content-evenly">
                <div className="weather-info d-flex flex-wrap justify-content-center">
                    <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="Weather Icon" />
                    <div className='text-center'>
                        <p className="location">Boston</p>
                        <p className="temperature">6°</p>
                    </div>
                </div>
                <div className="weather-details">
                    <p>Condition: moderate rain</p>
                    <p>Humidity: 87%</p>
                    <p>Pressure: 1017 hPa</p>
                    <p>Wind Speed: 5.14 m/s</p>
                    <p>Wind Direction: 80°</p>
                    <p>Cloudiness: 100%</p>
                    <p>Visibility: 10000 meters</p>
                    <p>Sunrise: 6:24:01 AM</p>
                    <p>Sunset: 7:10:56 PM</p>
                </div>
            </div>

            {/* {forecastData && ( */}
            <div>
                <h2 className="weather-title">3 Hour / 5 Day Forecast</h2>
                <div className="forecast-container d-flex flex-wrap justify-content-evenly">
                    {/* {forecastData.list.map((forecast, index) => ( */}
                    <div key={1} className="forecast-item">
                        <div className="weather-info d-flex flex-wrap justify-content-center">
                            <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="Weather Icon" />
                            <div className='text-center'>
                                <p>2024-04-03 03:00:00</p>
                                <p className="temperature">6°</p>
                            </div>
                        </div>
                        <div className="weather-details">
                            <p>Condition: overcast clouds</p>
                            <p>Wind Speed: 3.75 m/s</p>
                        </div>
                    </div>
                    <div key={2} className="forecast-item">
                        <div className="weather-info d-flex flex-wrap justify-content-center">
                            <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="Weather Icon" />
                            <div className='text-center'>
                                <p>2024-04-03 06:00:00</p>
                                <p className="temperature">5°</p>
                            </div>
                        </div>
                        <div className="weather-details">
                            <p>Condition: overcast clouds</p>
                            <p>Wind Speed: 2.79 m/s</p>
                        </div>
                    </div>
                    <div key={3} className="forecast-item">
                        <div className="weather-info d-flex flex-wrap justify-content-center">
                            <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="Weather Icon" />
                            <div className='text-center'>
                                <p>2024-04-03 09:00:00</p>
                                <p className="temperature">3°</p>
                            </div>
                        </div>
                        <div className="weather-details">
                            <p>Condition: overcast clouds</p>
                            <p>Wind Speed: 3.79 m/s</p>
                        </div>
                    </div>
                    <div key={4} className="forecast-item">
                        <div className="weather-info d-flex flex-wrap justify-content-center">
                            <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="Weather Icon" />
                            <div className='text-center'>
                                <p>2024-04-03 12:00:00</p>
                                <p className="temperature">4°</p>
                            </div>
                        </div>
                        <div className="weather-details">
                            <p>Condition: overcast clouds</p>
                            <p>Wind Speed: 4.79 m/s</p>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            </div>
            {/* )} */}

        </div>
    )
}

export default WeatherDashboard;