import React from "react";
import "./Forecast.css";

export default function HourForecast() {
  return (
    <div className="hour-forecast">
      <h3>
        <strong>3 Hour Forecast</strong>
      </h3>

      <div className="container">
        <div className="row">
          <div className="col-2 forecast">
            <h3 className="hour">10:10</h3>
            <i className="fas fa-sun" id="forecast-icon" />
            <div className="forecast-temp">10°C</div>
            <div className="forecast-condition">Sunny</div>
          </div>

          <div className="col-2 forecast">
            <h3 className="hour">10:10</h3>
            <i className="fas fa-sun" id="forecast-icon" />
            <div className="forecast-temp">10°C</div>
            <div className="forecast-condition">Sunny</div>
          </div>

          <div className="col-2 forecast">
            <h3 className="hour">10:10</h3>
            <i className="fas fa-sun" id="forecast-icon" />
            <div className="forecast-temp">10°C</div>
            <div className="forecast-condition">Sunny</div>
          </div>

          <div className="col-2 forecast">
            <h3 className="hour">10:10</h3>
            <i className="fas fa-sun" id="forecast-icon" />
            <div className="forecast-temp">10°C</div>
            <div className="forecast-condition">Sunny</div>
          </div>

          <div className="col-2 forecast">
            <h3 className="hour">10:10</h3>
            <i className="fas fa-sun" id="forecast-icon" />
            <div className="forecast-temp">10°C</div>
            <div className="forecast-condition">Sunny</div>
          </div>
        </div>
      </div>
    </div>
  );
}
