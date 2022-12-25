function fetchData() {

}

function fetchCurrentWeatherData() {

}

function fetchWeeklyForecastData() {

}

function displayWeeklyForecast() {
    const daysContainer = document.querySelector("#days-container");
    for (i=0; i<5; i++){
        const dayForecast = document.createElement("div");
        dayForecast.classList.add("day-forecast");
        dayForecast.setAttribute("data-day-id", 0);

        const dayOfWeek = document.createElement("h3");
        dayOfWeek.classList.add("day-of-week");
        dayOfWeek.textContent = "Mon";
        dayForecast.appendChild(dayOfWeek);

        const weatherSymbol = document.createElement("div");
        weatherSymbol.classList.add("weather-symbol");
        const materialSymbol = document.createElement("span");
        materialSymbol.classList.add("material-symbols-outlined");
        materialSymbol.classList.add("md-48");
        materialSymbol.textContent = "thunderstorm";
        weatherSymbol.appendChild(materialSymbol);
        dayForecast.appendChild(weatherSymbol);

        const temperatureContainer = document.createElement("div");
        temperatureContainer.classList.add("temperature-container");
        const max = document.createElement("div");
        max.classList.add("max");
        max.textContent = "200 ˚C";
        temperatureContainer.appendChild(max);
        const min = document.createElement("div");
        min.classList.add("min");
        min.textContent = "-200 ˚C";
        temperatureContainer.appendChild(min);
        dayForecast.appendChild(temperatureContainer);

        daysContainer.appendChild(dayForecast);

    }
}

function displayTodayForecast() {
    const cityName = document.querySelector("#city-name");
    cityName.textContent = "City of Doom";

    const currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.textContent = "100 ˚C";

    const weatherDescriptor = document.querySelector("#weather-descriptor");
    weatherDescriptor.textContent = "Apocalypse";

    const forecastWeather = document.querySelector("#forecast-weather");
    const max = document.createElement("div");
    max.classList.add("max");
    max.textContent = "200 ˚C";
    forecastWeather.appendChild(max);
    const min = document.createElement("div");
    min.classList.add("min");
    min.textContent = "-200 ˚C";
    forecastWeather.appendChild(min);

    const feelsLike = document.querySelector(".feels-like");
    let text = feelsLike.children[1].textContent = "Feels like: 0 ˚C";

    const humidity = document.querySelector(".humidity");
    text = humidity.children[1].textContent = "Humidity: 150 %";

    const chanceOfRain = document.querySelector(".chance-of-rain");
    text = chanceOfRain.children[1].textContent = "Chance of rain: 0 %";

    const windSpeed = document.querySelector(".wind-speed");
    text = windSpeed.children[1].textContent = "Wind speed: 300 km/h";
}

displayTodayForecast();
displayWeeklyForecast();
