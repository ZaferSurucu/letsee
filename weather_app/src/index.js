const API_KEY = "9511a980519d2619d280ebc37aa0febe";

async function getCurrentWeatherData(lat,lon){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    return data;
}

async function getLatLon(cityName){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
    const data = await response.json();
    const lat = data[0].lat;
    const lon = data[0].lon;
    return getCurrentWeatherData(lat,lon).then();
}

const input = prompt("Enter a city name");

function getTemp(data){
    return data.main.temp;
}

function getWind(data){
    return data.wind.speed;
}

function getHumudity(data){
    return data.main.humidity;
}

function getWeather(data){
    return data.weather[0].main;
}
getLatLon(input).then(data => {
    const temp = getTemp(data);
    const wind = getWind(data);
    const humidity = getHumudity(data);
    const weather = getWeather(data);
    const weatherDiv = createWeatherDiv(temp,wind,humidity,weather);
    document.body.appendChild(weatherDiv);
});

function createWeatherDiv(temp,wind,humidity,weather){
    const weatherDiv = document.createElement("div");
    weatherDiv.classList.add("weather_container");
    const tempDiv = document.createElement("div");
    tempDiv.classList.add("temp");
    tempDiv.innerHTML = `${temp}&deg;C`;
    const windDiv = document.createElement("div");
    windDiv.classList.add("wind");
    windDiv.innerHTML = `${wind}m/s`;
    const humidityDiv = document.createElement("div");
    humidityDiv.classList.add("humidity");
    humidityDiv.innerHTML = `${humidity}%`;
    const weatherDiv1 = document.createElement("div");
    weatherDiv1.classList.add("weather");
    weatherDiv1.innerHTML = `${weather}`;
    const img = document.createElement("img");
    img.src = "https://openweathermap.org/img/wn/" + getWeatherPNGname(weather) + "@2x.png";
    const specDiv = document.createElement("div");
    specDiv.classList.add("spec");
    const tempAndIcon = document.createElement("div");
    tempAndIcon.classList.add("temp_and_icon");
    tempAndIcon.appendChild(img);
    tempAndIcon.appendChild(tempDiv);
    specDiv.appendChild(weatherDiv1);
    specDiv.appendChild(windDiv);
    specDiv.appendChild(humidityDiv);
    weatherDiv.appendChild(tempAndIcon);
    weatherDiv.appendChild(specDiv);
    
    return weatherDiv;
}

function getWeatherPNGname(weather){
    switch(weather){
        case "Clear":
            return "01d";
        case "Clouds":
            return "02d";
        case "Rain":
            return "10d";
        case "Snow":
            return "13d";
        case "Thunderstorm":
            return "11d";
        default:
            return "01d";
    }
}