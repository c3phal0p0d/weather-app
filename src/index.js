import * as view from './view';
import * as weatherData from './weatherData';

let location = "melbourne,au";

async function fetchAndDisplayWeatherData(){
    let data = await weatherData.fetchData("current", "metric", location);

    const locationData = weatherData.location(data);
    view.displayLocation(locationData);

    const currentWeatherData = weatherData.currentWeather(data);
    view.displayCurrentWeather(currentWeatherData);

    data = await weatherData.fetchData("next24hours", "metric", "melbourne,au");
    const next24HoursForecastData = weatherData.next24HoursForecast(data);
    view.display24HourForecast(next24HoursForecastData);
}

fetchAndDisplayWeatherData();

const searchInput = document.querySelector('.input');
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener("click", (e) => {
    location = searchInput.value;
    fetchAndDisplayWeatherData();
});
