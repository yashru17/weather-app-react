import React, { useState } from "react";
import Button from "./Button";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Enter City"
        // value={weather.city}
        onChange={(e) => weather.setCity(e.target.value)}
      />
      <Button name="Search" id='search'/>
    </div>
  );
};

export default Input;
