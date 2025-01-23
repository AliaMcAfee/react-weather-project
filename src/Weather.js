import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Chicago</h1>
      <ul>
        <li>Wednesday 08:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          >
            23°
          </img>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0% </li>
              <li>Humidity: 56%</li>
              <li>Wind: 10 mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
