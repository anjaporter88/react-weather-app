import React from "react";
import "./Today.css";

export default function Today() {
  return (
    <div className="today">
      <i className="fas fa-sun icon" id="today-icon" />
      <p className="info condition" />
      <p id="condition-today">Condition</p>
    </div>
  );
}
