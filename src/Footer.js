import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row" id="footer">
        <div className="col-12">
          <a
            href="https://github.com/anjaporter88/react-weather-app"
            target="_blank"
          >
            <em>Open-source code </em>
          </a>
          by
          <a href="https://www.anjaporter.com" target="_blank">
            <em> Anja Porter</em>
          </a>
        </div>
      </div>
    </div>
  );
}
