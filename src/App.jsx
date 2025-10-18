import React, { useState } from "react";
import { getWeather } from "./api";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    if (!city) {
      setError("Please enter a city name!");
      setWeather(null);
      return;
    }

    try {
      const data = await getWeather(city);
      console.log("Weather Data:", data);
      setWeather(data);
      setError("");
    } catch (err) {
      setError("City not found!");
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <div className="search-box">
        <h1>🌤 Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleFetch}>Get Weather</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p> Temperature: {weather.current.temp_c} °C</p>
          <p> Humidity: {weather.current.humidity}%</p>
          <p> Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="icon" />

          <h3>3-Day Forecast</h3>
          <div className="forecast">
            {weather.forecast.forecastday.map((day, index) => (
              <div key={index} className="day-card">
                <p>{day.date}</p>
                <img src={day.day.condition.icon} alt="icon" />
                <p>{day.day.condition.text}</p>
                <p>🌡 {day.day.avgtemp_c} °C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
