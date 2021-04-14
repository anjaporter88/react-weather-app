import React from "react";
import "./Forecast.css";

export default function DayForecast() {
  return (
    <div className="day-forecast">
      <h3>
        <strong>5 Day Forecast</strong>
      </h3>

      <div className="container">
        <div className="row">
          <div className="col-2 forecast">
            <h3 className="hour">Mon</h3>
            <i className="fas fa-sun" id="forecast-icon" />
            <div className="forecast-temp">10°C</div>
            <div className="forecast-condition">Sunny</div>
          </div>

          <div className="col-2 forecast">
            <h3 className="hour">Tue</h3>
            <i className="fas fa-sun" id="forecast-icon" />
            <div className="forecast-temp">10°C</div>
            <div className="forecast-condition">Sunny</div>
          </div>

          <div className="col-2 forecast">
            <h3 className="hour">Wed</h3>
            <i className="fas fa-sun" id="forecast-icon" />
            <div className="forecast-temp">10°C</div>
            <div className="forecast-condition">Sunny</div>
          </div>

          <div className="col-2 forecast">
            <h3 className="hour">Thur</h3>
            <i className="fas fa-sun" id="forecast-icon" />
            <div className="forecast-temp">10°C</div>
            <div className="forecast-condition">Sunny</div>
          </div>

          <div className="col-2 forecast">
            <h3 className="hour">Fri</h3>
            <i className="fas fa-sun" id="forecast-icon" />
            <div className="forecast-temp">10°C</div>
            <div className="forecast-condition">Sunny</div>
          </div>
        </div>
      </div>
    </div>
  );
}
