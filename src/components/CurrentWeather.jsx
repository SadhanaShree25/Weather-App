import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data, city }) => {
  const weather = data.weather[0];

  return (
    <div className="current-weather">
      <h2>📍 {city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
        alt={weather.description}
      />
      <h1>{Math.round(data.main.temp)}°C</h1>
      <p className="condition">{weather.main}</p>

      <div className="extra-info">
        <span>💧 {data.main.humidity}%</span>
        <span>🌬️ {data.wind.speed} m/s</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
