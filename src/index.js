import * as view from './view';
import * as weatherData from './weatherData';

async function main(){
    let data = await weatherData.fetchData("current", "metric", "melbourne,au");

    const locationData = weatherData.location(data);
    view.displayLocation(locationData);

    const currentWeatherData = weatherData.currentWeather(data);
    view.displayCurrentWeather(currentWeatherData);

    data = await weatherData.fetchData("next24hours", "metric", "melbourne,au");
    const next24HoursForecastData = weatherData.next24HoursForecast(data);
    view.display24HourForecast(next24HoursForecastData);
}

main();
