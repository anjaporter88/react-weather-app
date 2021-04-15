import React from "react";
import "./Temp.css";

export default function Temp() {
  return (
    <div className="temp">
      <span id="temp">9</span>
      <span id="unit">°C</span>
      <button id="convert" className="button">
          Convert
      </button>
      <p className="info">
        feels like: <span id="feels-like">9</span>°C
      </p>
      <p className="info">
        humidity: <span id="humidity">33</span>%
      </p>
      <p className="info">
        windspeed: <span id="wind">2</span>km/h
      </p>
    </div>
  );
}
