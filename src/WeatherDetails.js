import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherSvg";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <h1>{props.data.city}</h1>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherSvg />
            </div>

            <div>
              <Temperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <Date date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
