function formatRequestURL(requestType, units, location) {
    if (requestType=="current"){
        return `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=fbd4dc4228329e4126adc34eaddb85c9`;
    }

    else if (requestType=="next24hours"){
        return `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&APPID=fbd4dc4228329e4126adc34eaddb85c9`
    }
}

export async function fetchData(requestType, units, location){
    const requestURL = formatRequestURL(requestType, units, location);

    try {
        const response = await fetch(requestURL, {mode: 'cors'});
        return await response.json();
    }
    catch (err) {
        alert(err);
    }
}

export const location = (data) => {
    const cityName = data.name;
    const country = data.sys.country;

    return {cityName, country};
}

function getWeatherSymbol(weatherIcon){
    switch (weatherIcon){
        case "01d":
            return "clear_day";
        case "01n":
            return "clear_night";
        case "02d":
            return "partly_cloudy_day";
        case "02n":
            return "partly_cloudy_night";
        case "03d":
        case "03n":
        case "04d":
        case "04n":
            return "cloudy";
        case "09d":
        case "09n":
        case "10d":
        case "10n":
            return "rainy";
        case "11d":
        case "11n":
            return "thunderstorm";
        case "13d":
        case "13n":
            return "ac_unit";
        case "50d":
        case "50n":
            return "airwave";
    }
}

export const currentWeather = (data) => {
    let weatherDescriptor = (data.weather[0].description);
    weatherDescriptor = weatherDescriptor.charAt(0).toUpperCase() + weatherDescriptor.slice(1);
    const currentTemperature = Math.round(data.main.temp);

    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed);

    return {weatherDescriptor, currentTemperature, feelsLike, humidity, windSpeed};
}

function convertToLocalTimezone(dt, timezone){
    const datetime = new Date(dt * 1000);
    
    const localTime = datetime.getTime();
    const localOffset = datetime.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;

    const convertedDate = new Date(utc + (timezone * 1000));

    return convertedDate;
    
}

function getHour(dt, timezone){
    const local_dt = convertToLocalTimezone(dt, timezone);
    let hour = local_dt.getHours();
    let minute = local_dt.getMinutes();
    if (minute>30){
        hour += 1;
    }

    return hour;
}

function convertFom24HourTo12HourTime(hour){
    if (hour==0){
        return "12am";
    }
    else if (hour<12){
        return hour + "am"
    } 
    else if (hour==12){
        return "12pm";
    } 
    else {
        return hour - 12 + "pm";
    }
}

const getHourForecast = (data, id) => {
    const hour = convertFom24HourTo12HourTime(getHour(data.list[id].dt, data.city.timezone));
    const forecastTemperature = Math.round(data.list[id].main.temp);
    const weatherSymbol = getWeatherSymbol(data.list[id].weather[0].icon);

    return {hour, forecastTemperature, weatherSymbol};
}

export const next24HoursForecast = (data) => {
    let list = [];
    for (let i=0; i<8; i++){
        let hourForecast = getHourForecast(data, i);
        list.push(hourForecast);
    }

    return {list};
}


