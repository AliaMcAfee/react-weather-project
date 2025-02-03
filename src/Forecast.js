import React, { useState } from "react";
import WeatherSvg from "./WeatherSvg";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="ForecastDay">{forecast[0].dt}</div>
            <WeatherSvg code={forecast[0].weather[0].icon} />
            <div className="ForecastTemperature">
              <span className="temperature-max">{forecast[0].temp.max}°</span>{" "}
              <span className="temperature-min">{forecast[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8c5ce5cfb11389835425fc6066c06e13";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading Forecast ....";
  }
}
