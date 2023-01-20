const weatherBlock = document.querySelector("#weather");

function getWeather () {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
       .then((res) => res.json())
       .then((data) => {
            const location = data.name;
            const temp = Math.round(data.main.temp);
            const pressure = data.main.pressure;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const speed = data.wind.speed;
            const deg = data.wind.deg;
            const icon = data.weather[0].icon;


            const template = 
            `<div class="weather-header">
                <h1 class="city">${location}</h1>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="">
            </div>
            <div class="temp">${temp}</div>
            <div class="pressure">${pressure}</div>
            <div class="description">${description}</div>
            <div class="humidity">${humidity}</div>
            <div class="speed">${speed}</div>
            <div class="deg">${deg}</div>`;
   
            weatherBlock.innerHTML = template;
       });
    }

getWeather();

