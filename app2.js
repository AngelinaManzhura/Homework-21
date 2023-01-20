"use strict"

const weatherBlock = document.querySelector("#weather");

let city = prompt("Input city name");

async function loadWeather (userCity) {
    weatherBlock.innerHTML = `
       <div class="weather-loading">
           <img src="loading_icon.gif" alt="loading">
       </div>`;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
        .then(res => res.json())
        .then(data => getWeather(data))
        .catch(res => weatherBlock.innerHTML = res.message);

    // const server = "http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
    // const response = await fetch(server, {
    //     method: 'GET',
    // });
    // const responseResult = await response.json();

    // if(response.ok) {
    //     getWeather(responseResult);
    // } else {
    //     weatherBlock.innerHTML = responseResult.message;
    // }
}

function getWeather(data) {
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const pressure = data.main.pressure;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;
    const deg = data.wind.deg;
    const icon = data.weather[0].icon;

    const template = `
        <div class="weather-header">
            <h1 class="city">${location}</h1>
            <div class="wrapper-temp">
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="">
                <div class="temp">${temp} °C</div>
            </div>
        </div>
        
        <div class="pressure">Pressure ${pressure}</div>
        <div class="description">Description: ${description}</div>
        <div class="humidity">Humidity: ${humidity}</div>
        <div class="speed">Speed: ${speed}</div>
        <div class="deg">Deg: ${deg}</div>
    `;
    weatherBlock.innerHTML = template;
}

if(city !== null && city?.trim()?.length > 1) {
    if (weatherBlock) {
        loadWeather(city);
    }    
} else {
    alert('City name is incorrect')
}
