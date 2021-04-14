import React from "react";
import "./Search.css";

export default function Search() {
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
    </div>
  );
}
