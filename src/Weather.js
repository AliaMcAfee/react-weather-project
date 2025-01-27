import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
  const [forecast, setForecast] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setForecast({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleNewEntry(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let city = "Chicago";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (forecast.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form"
                autoFocus="on"
                onChange={handleNewEntry}
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
            <WeatherDetails data={forecast} />
            <WeatherForecast coordinates={forecast.coordinates} />
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
  } else {
    search();
    return "Loading.....";
  }
}
