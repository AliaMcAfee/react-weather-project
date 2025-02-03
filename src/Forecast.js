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
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="ForecastDay">{forecast[0].temperature.day}</div>
            <WeatherSvg code={forecast[0].icon} />
            <div className="ForecastTemperature">
              <span className="temperature-max">
                {forecast[0].temperature.maximum}°
              </span>{" "}
              <span className="temperature-min">
                {forecast[0].temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "04d7a4ta8ecdfa4b30ebd32f8c464o31";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading Forecast ....";
  }
}
