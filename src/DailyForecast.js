import React from "react";
import WeatherSvg from "./WeatherSvg";

export default function DailyForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Weather-day">{day()}</div>
      <WeatherSvg code={props.data.weather[0].icon} size={36} />
      <div className="Weather-temperatures">
        <span className="Weather-temperature-max">{maxTemperature()}</span>
        <span className="Weather-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
