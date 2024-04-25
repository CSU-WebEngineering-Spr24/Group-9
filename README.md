# Group-9: Open Weather App
## Description: 
The Open Weather App is a web application designed to provide users with real-time weather information and forecasts based on their specified location. The application serves as a convenient tool for users to check the current weather conditions, forecast data and other weather-related metrics for any city or ZIP code.
## Purpose:
The primary purpose of the app is to give users a user-friendly and intuitive interface to access up-to-date weather data including current temperature, humidity, wind speed and forecasted weather. Users can search for weather information using a city name, ZIP code or their current geographic location (with geolocation support).
## Key Features:
- Current Weather: The app fetches current weather data, including temperature, humidity, wind speed and weather conditions for the specified location.
- Weather Forecast: Provides a 3-hour up to 5-day weather forecast for the specified location showing future temperature, weather conditions and wind speed.
- Multiple Search Options: Users can search for weather data using a city name, ZIP code or their current location.
- Temperature Units: Users can toggle between Celsius and Fahrenheit for temperature display.
- Responsive Design: The application is designed to be responsive and adaptable to various screen sizes and devices.
- Real-time Data: Weather information is fetched in real-time using the OpenWeatherMap API ensuring up-to-date data for users.
## Installation Instructions:
Ensure you have the following things installed on your machine:
- [x] Node.js and npm (Node.js includes npm the Node Package Manager)
- [x] Java Development Kit (JDK) version 21
- [x] Spring Boot for the backend server (it will use the JDK installed)
- [x] Git (optional, for cloning the repository) 
### Clone the Repository:
- [x] If you haven't already, clone the repository to your local machine using Git.
### Install Frontend Dependencies:
- [x] In terminal, navigate to the react directory: `cd openweather/src/main/react`
- [x] `npm install`
### Open project in IDE and Start Server: 
- [x] Open "OpenweatherApplication.java" file in IDE
- [x] In terminal Navigate to the project root directory: `cd openweather`
- [x] Start server by running: `./gradlew bootRun`
- [x] Alternative way to start server is to click start/run app button on IDE interface  
- [x] Server should start in localhost port 8080
## Usage Instructions:
- Accessing Application: Open web browser and go to http://localhost:8080 to access the app.
### Geolocation: 
Enable geolocation permissions in your browser for the app to use your current location. 
### Search Current Weather:
- Location Type: Choose either City or ZIP Code from the dropdown menu.
- Enter Location: Enter the city name or ZIP code in the input field.
- Temperature Unit: Select Celsius or Fahrenheit for temperature display.
- Search Button: Click the Search button to fetch the current weather and forecast data.
### View Weather Information:
- Current Weather: See current temperature, humidity, wind speed, weather conditions and more.
- Weather Forecast: View the 3-hour / 5-day weather forecast for the specified location.
## Configuration:
### API Key:
- [x] Replace `API_KEY` in the WeatherServiceImpl class with your OpenWeatherMap API key. 
### Application Settings: 
- [x] The application uses the OpenWeatherMap API. Make sure the base URL (https://api.openweathermap.org/data/2.5) is set correctly in the WeatherServiceImpl class. 
### Client-Side Configuration: 
- [x] In the WeatherDashboard component you may customize the temperature units, location type and other input defaults as per your preferences.
## Deployment Instructions:
### Frontend Deployment: 
- [x] Build the React application using the command npm run build.
- [x] Serve the built application using a web server like Apache or Nginx. 
### Backend Deployment: 
- [x] Build the Java Spring Boot application using gradle
- [x] Deploy the backend application on your preferred hosting platform or server.  
## Contributing Guidelines:
### Code Contributions: 
- [x] Fork the project repository and create a branch for your feature or fix. 
- [x] Follow the coding standards and best practices outlined in the project. 
- [x] Submit pull requests with clear descriptions of your changes. 
### Bug Reporting and Feature Requests:
- [x] Use the issue tracker in the repository to report bugs or request new features. 
- [x] Include clear and concise descriptions of the bug or feature along with any relevant steps to reproduce the issue.  
## License:
- [x] The project is licensed under a permissive license such as the MIT License. 
- [x] Refer to the project's LICENSE file for detailed terms and conditions. 
## Credits:
### Third-Party Libraries: 
- [x] React: Used for building the frontend user interface.
- [x] Java Spring Boot: Used for building the backend services. 
- [x] OpenWeatherMap API: Used to retrieve current weather and forecast data. 
- [x] Other libraries such as Axios for handling HTTP requests and React Router for routing. 
### Resources:
Acknowledge any additional resources such as tutorials, guides or documentation that were helpful in building the project.
