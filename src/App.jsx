import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import CurrentWeather from "./components/CurrentWeather";
import Loader from "./components/Loader";
import "./App.css";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔍 Fetch Weather By City
  const searchWeather = async () => {
    if (!inputCity) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();

      setWeather(data);
      setCity(inputCity);
      setInputCity("");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // 🌈 Dynamic Background
  const getBackground = () => {
    if (!weather) return "default";

    const main = weather.list[0].weather[0].main;

    if (main === "Clear") return "clear";
    if (main === "Clouds") return "clouds";
    if (main === "Rain") return "rain";
    if (main === "Snow") return "snow";

    return "default";
  };

  return (
    <div className={`app ${getBackground()}`}>
      <h1>🌤️ Weather Forecast App</h1>
      <p className="subtitle">
        Check 5-Day Weather Forecast for Any City 🌍
      </p>

      {/* 🔎 Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchWeather()}
        />
        <button onClick={searchWeather}>Search</button>
      </div>

      {loading && <Loader />}
      {error && <div className="error">{error}</div>}

      {/* 🌡️ Current Weather Big Card */}
      {weather && (
        <CurrentWeather
          data={weather.list[0]}
          city={city}
        />
      )}

      {/* 📅 5 Day Forecast */}
      <div className="weather-container">
        {weather &&
          weather.list
            .filter((item) => item.dt_txt.includes("12:00:00"))
            .slice(0, 5)
            .map((day, index) => (
              <WeatherCard key={index} day={day} />
            ))}
      </div>
    </div>
  );
};

export default App;
