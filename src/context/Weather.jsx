import { createContext, useContext, useState } from "react";
import { weatherInfo, weatherInfoOfLocation } from "../api/index";
export const weatherContext = createContext(null);

export const useWeather = () => {
  return useContext(weatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  const fetchData = async () => {
    const response = await weatherInfo(city);
    setData(response);
  };

  const fetchLocationData = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        weatherInfoOfLocation(lat, lon).then((data) => setData(data));
      }
    );
  };
  return (
    <weatherContext.Provider
      value={{ data, city, fetchData, fetchLocationData, setCity }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};
