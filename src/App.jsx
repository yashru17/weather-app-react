import { useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Input from "./components/Input";

import { useWeather } from "./context/Weather";

function App() {
  const weather = useWeather()
  useEffect(() => {
    weather.fetchLocationData()
  }, [])
  return (
    <>
      <Header title="Weather App" />
      <Input />
      <Card />
      <Button name='Refresh' id='refresh'/>
    </>
  );
}

export default App;
