export function display24HourForecast(data) {
    const hoursContainer = document.querySelector("#hours-container");
    hoursContainer.innerHTML = "";
    for (let i=0; i<8; i++){
        const hourForecast = document.createElement("div");
        hourForecast.classList.add("hour-forecast");
        hourForecast.setAttribute("data-id", i);

        const hour = document.createElement("h3");
        hour.classList.add("hour");
        hour.textContent = data.list[i].hour;
        hourForecast.appendChild(hour);

        const weatherSymbol = document.createElement("div");
        weatherSymbol.classList.add("weather-symbol");
        const materialSymbol = document.createElement("span");
        materialSymbol.classList.add("material-symbols-outlined");
        materialSymbol.classList.add("md-48");
        materialSymbol.textContent = data.list[i].weatherSymbol;
        weatherSymbol.appendChild(materialSymbol);
        hourForecast.appendChild(weatherSymbol);

        const temperature = document.createElement("div");
        temperature.classList.add("temperature");
        temperature.textContent = `${data.list[i].forecastTemperature} ˚C`;
        hourForecast.appendChild(temperature);

        hoursContainer.appendChild(hourForecast);

    }
}

export function displayLocation(data) {
    const cityName = document.querySelector("#city-name");
    cityName.textContent = `${data.cityName}, ${data.country}`;
}

export function displayCurrentWeather(data) {
    const currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.textContent = `${data.currentTemperature} ˚C`;

    const weatherDescriptor = document.querySelector("#weather-descriptor");
    weatherDescriptor.textContent = data.weatherDescriptor;

    const feelsLike = document.querySelector(".feels-like");
    let text = feelsLike.children[1].textContent = `Feels like: ${data.feelsLike} ˚C`;

    const humidity = document.querySelector(".humidity");
    text = humidity.children[1].textContent = `Humidity: ${data.humidity} %`;

    const windSpeed = document.querySelector(".wind-speed");
    text = windSpeed.children[1].textContent = `Wind speed: ${data.windSpeed} km/h`;
}