import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Search.css";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});
  const [city, setCity] = useState("Brighton");

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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "3ac4d291dda277122b73faa304a1df6a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="search">
        <div className="row">
          <div className="col-12">
            <form id="search-engine" onSubmit={handleSubmit}>
              <input
                type="text"
                name="city"
                placeholder="Enter a city..."
                id="city-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <button type="button" className="button" id="current-location">
                <i className="fas fa-map-marker-alt"></i>
              </button>
              <input
                type="submit"
                name="search"
                value="Get Weather"
                className="button"
              />
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        </div>
    );
  } else {
    search();
    return "Loading weather data...";
  }
}