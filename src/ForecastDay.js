import React from "react";
import WeatherSvg from "./WeatherSvg";

export default function ForecastDay(props) {
  return (
    <div>
      <div className="ForecastDay">{props.data.temperature.day}</div>
      <WeatherSvg />
      <div className="ForecastTemperature">
        <span className="temperature-max">
          {props.data.temperature.maximum}°
        </span>{" "}
        <span className="temperature-min">
          {props.data.temperature.minimum}°
        </span>
      </div>
    </div>
  );
}
