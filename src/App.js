import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>React Weather Project</h2>
        <Weather />
        <p>
          This project was coded by Alia McAfee and is open sourced on{" "}
          <a href="https://github.com/AliaMcAfee/react-weather-project.git">
            Github
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
