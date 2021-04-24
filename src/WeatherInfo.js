import React from "react";
import DateAndTime from "./DateAndTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-date">
        <div className="row align-items-center">
          <div className="col-4">
            <span id="city">{props.data.city}</span>
            <p className="info" id="date">
              <DateAndTime date={props.data.date} />
            </p>
          </div>
          <div className="col-4">
            <div className="today">
              <i className="fas fa-sun icon" id="today-icon" />
              <p className="info condition" />
              <p id="condition-today">{props.data.condition}</p>
            </div>
          </div>
          <div className="col-4">
            <div className="temp">
              <span id="temp">{Math.round(props.data.temp)}</span>
              <span id="unit">°C</span>
              <button id="convert" className="button">
                Convert
              </button>
              <p className="info">
                feels like:{" "}
                <span id="feels-like">{Math.round(props.data.feelsLike)}</span>
                °C
              </p>
              <p className="info">
                humidity:{" "}
                <span id="humidity">{Math.round(props.data.humidity)}</span>%
              </p>
              <p className="info">
                windspeed: <span id="wind">{Math.round(props.data.wind)}</span>
                km/h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}