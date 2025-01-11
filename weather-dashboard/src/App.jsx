import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    const API_KEY = "b1e2dd92a6ac2c07395a81d54939c7d4"; 
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };

  return (
    <div className="app bg-gradient-to-r from-blue-500 to-purple-500 text-white min-h-screen flex flex-col items-center py-6">
      <h1 className="text-center text-4xl font-extrabold mb-6">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
