// src/api.js
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchWeather = async (lat, lon) => {
  if (!API_KEY) {
    throw new Error("OpenWeather API key is missing. Check your .env file!");
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch weather data: ${response.status}`);
  }

  return response.json();
};
