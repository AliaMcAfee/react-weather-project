import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <h1>Chicago</h1>
          <ul>
            <li>Sunday 08:00</li>
            <li>Partly Cloudy</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          24°
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 53%</li>
            <li>Wind: 7mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
