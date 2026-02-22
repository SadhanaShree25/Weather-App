// src/components/WeatherCard.jsx
import React from "react";
import "./WeatherCard.css";


const WeatherCard = ({ day }) => {
  const date = new Date(day.dt * 1000);
  const dayName = date.toLocaleDateString(undefined, { weekday: "long" });

  return (
    
    <div className="weather-card">
      <h3>{dayName}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}

        alt={day.weather[0].description}
      />
      <p>{day.weather[0].main}</p>
      <p>🌡️ {Math.round(day.main.temp)}°C</p>
      <p>💧 {day.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
