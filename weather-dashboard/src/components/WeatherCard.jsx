import React from "react";

function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-card bg-white text-gray-800 border rounded-lg p-6 shadow-lg text-center mt-6 w-80">
      <h2 className="text-2xl font-bold mb-3">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
        className="mx-auto"
      />
      <p className="text-lg capitalize">{weather[0].description}</p>
      <p className="text-2xl font-semibold">Temperature: {main.temp}°C</p>
      <p className="text-lg">Humidity: {main.humidity}%</p>
      <p className="text-lg">Wind Speed: {wind.speed} km/h</p>
    </div>
  );
}

export default WeatherCard;
