import React, { useState } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    let [weatherData, setWeatherData] = useState(null);

    function showWeather(response) {
        let data = response.data;
        console.log(data);

        setWeatherData({
            city: data.name,
            date: new Date(data.dt * 1000),
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            icon: data.weather[0].icon,
        });
    }

    function search() {
        const apiKey = "31bb142cae6eb97ee59e5b60d90e1e94";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(showWeather);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <input
                                className="search-bar"
                                type="search"
                                placeholder="Search city"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input
                                className="weather-button"
                                type="submit"
                                value="Search"
                            />
                        </div>
                    </div>
                </form>
                <WeatherDetails data={weatherData} />
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}