import React from "react";
import { useWeather } from "../context/Weather";
const Button = (props) => {
    const weather = useWeather()
    return(
        <button onClick={() => weather.fetchData()} id={props.id}>{props.name}</button>
    )
}

export default Button