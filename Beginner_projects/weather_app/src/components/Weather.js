import { Fragment, useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';

const Weather = ( {cityName} ) => {

    const [iconData, setIconData] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchWeatherDataHandler(){
            try{
                const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName ? encodeURIComponent(cityName) : 'Huntsville'}&units=metric&appid=3a06d1ddec8ef554f78ab9078b4b79c0`;
                const response = await fetch(apiUrl);
                if(!response.ok){
                    throw new Error("Enter a valid city name");
                }
                const data = await response.json();
                const iconJsonData = data.weather[0].icon;
                const transformedWeatherData = {
                    city_name: data.name,
                    temp: data.main.temp,
                    feels_like: data.main.feels_like,
                    min_temperature: data.main.temp_min,
                    max_temperature: data.main.temp_max
                }
                setIconData(iconJsonData);
                setWeatherData(transformedWeatherData);
                setError(null);
            }catch(error){
                setError("Enter a valid city name");
                setWeatherData(null);
            }
            
        }
        fetchWeatherDataHandler();
    }, [cityName])

    return(
        <Fragment>
            {error && <div>Error: {error}</div>}
            <WeatherCard weather={weatherData} icon={iconData}/>
        </Fragment>
    )
}

export default Weather;
