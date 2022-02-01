import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherDetails(props) {
    return (
        <div>
            <h3>{props.data.city}</h3>

            <div className="weather-box">
                <div>
                    <div >
                        <div >
                            {<WeatherIcon code={props.data.icon} size={45} />}
                        </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Temperature: {props.data.temperature}C</li>
                        <li>description: {props.data.description}</li>
                        <li>Humidity: {props.data.humidity}%</li>

                    </ul>
                </div>
            </div>
        </div>
    );
}