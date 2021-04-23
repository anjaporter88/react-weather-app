import React, { useState } from "react";
import axios from "axios";
import DateAndTime from "./DateAndTime";
import "./Search.css";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});

  function handleResponse(response) {
    setweatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      condition: response.data.weather[0].description,
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
        <div className="city-date">
          <div className="row">
            <div className="col-4">
              <span id="city">{weatherData.city}</span>
              <p className="info" id="date">
                <DateAndTime date={weatherData.date}/>
              </p>
            </div>
            <div className="col-4">
              <div className="today">
                <i className="fas fa-sun icon" id="today-icon" />
                <p className="info condition" />
                <p id="condition-today">{weatherData.condition}</p>
              </div>
            </div>
            <div className="col-4">
              <div className="temp">
                <span id="temp">{Math.round(weatherData.temp)}</span>
                <span id="unit">°C</span>
                <button id="convert" className="button">
                  Convert
                </button>
                <p className="info">
                  feels like:{" "}
                  <span id="feels-like">
                    {Math.round(weatherData.feelsLike)}
                  </span>
                  °C
                </p>
                <p className="info">
                  humidity:{" "}
                  <span id="humidity">{Math.round(weatherData.humidity)}</span>%
                </p>
                <p className="info">
                  windspeed:{" "}
                  <span id="wind">{Math.round(weatherData.wind)}</span>km/h
                </p>
              </div>
            </div>
          </div>
        </div>
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