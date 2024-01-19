import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();
  // console.log(weather.data);
  return (
    <div className="card">
      <img src={weather.data?.current?.condition?.icon} alt="icon" />
      <p id="text">{weather.data?.current?.condition?.text}</p>
      <h1 id="temp">{weather.data?.current?.temp_c}&deg;C</h1>
      <p id="location">
        {weather.data?.location?.name}, {weather.data?.location?.country}
      </p>
      <div className="specs">
        <span>
          <p className="specs-title">wind</p>
          <p>{weather.data?.current?.wind_kph}kph</p>
        </span>
        <span>
          <p className="specs-title">humidity</p>
          <p>{weather.data?.current?.humidity}%</p>
        </span>
        <span>
          <p className="specs-title">pressure</p>
          <p>{weather.data?.current?.pressure_mb}mb</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
