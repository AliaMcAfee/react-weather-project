import React from "react";
import WeatherSvg from "./WeatherSvg";

export default function ForecastDay(props) {
  function temperatureMax() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function temperatureMin() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.temperature.day * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <WeatherSvg code={props.data.icon} />
      <div className="ForecastTemperature">
        <span className="temperature-max">{temperatureMax()}°</span>{" "}
        <span className="temperature-min">{temperatureMin()}°</span>
      </div>
    </div>
  );
}
