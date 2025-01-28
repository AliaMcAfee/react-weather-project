import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather Project</h1>
        <Weather defaultCity="Chicago" />
        <p>
          This project was coded by Alia McAfee and is open sourced on{" "}
          <a
            href="https://github.com/AliaMcAfee/react-weather-project.git"
            target=" _blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="http://app.netlify.com/sites/shc-react-weather-project/deploys/6798577ac6d692f2ef4fa3dc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </p>
      </div>
    </div>
  );
}
