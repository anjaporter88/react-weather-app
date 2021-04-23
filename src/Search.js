import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Search.css";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});

  function handleResponse(response) {
    setweatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      condition: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="search">
        <div className="row">
          <div className="col-12">
            <form id="search-engine">
              <input
                type="text"
                name="city"
                placeholder="Enter a city..."
                id="city-input"
                autoFocus="on"
              />
              <button type="button" className="button" id="current-location">
                <i className="fas fa-map-marker-alt"></i>
              </button>
              <input
                type="submit"
                name="search"
                value="Get Forecast"
                className="button"
              />
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        </div>
    );
  } else {
    const apiKey = "3ac4d291dda277122b73faa304a1df6a";
    let city = "Brighton";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading weather data...";
  }
}