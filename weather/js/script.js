const container = document.querySelector('.container');
const searchBtn = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const hourlyForecast = document.querySelector('.hourly-forecast');
const forecast = document.querySelector('.forecast');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

searchBtn.addEventListener('click', () => {
    const APIKey = 'ab765b466a53b6bdcff44bee6802b281';
    const city = document.querySelector('.search-box input').value.trim();

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '500px';
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove('active');
                hourlyForecast.classList.remove('active');
                forecast.classList.remove('active');
                error404.classList.add('active');
                return;
            }

            error404.classList.remove('active');
            cityHide.textContent = city;

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            const aqi = document.querySelector('.weather-details .aqi span');

            // Set weather icon from OpenWeatherMap
            const iconCode = json.weather[0].icon;
            image.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            // Update current weather
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed * 3.6)} km/h`;

            const aqiValues = ['Good', 'Moderate', 'Unhealthy', 'Very Unhealthy', 'Hazardous'];
            aqi.innerHTML = aqiValues[Math.floor(Math.random() * aqiValues.length)];

            // Generate hourly forecast (mock data)
            const hourlyItems = document.querySelector('.hourly-items');
            hourlyItems.innerHTML = '';
            const now = new Date();

            for (let i = 0; i < 5; i++) {
                const hour = new Date(now.getTime() + i * 3 * 60 * 60 * 1000);
                const temp = Math.round(json.main.temp + (Math.random() * 6 - 3));

                const hourlyItem = document.createElement('div');
                hourlyItem.className = 'hourly-item';
                hourlyItem.innerHTML = `
                            <p class="time">${hour.getHours()}:00</p>
                            <p class="temp">${temp > 0 ? '+' : ''}${temp}°</p>
                        `;
                hourlyItems.appendChild(hourlyItem);
            }

            const forecastDays = document.querySelector('.forecast-days');
            forecastDays.innerHTML = '';
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            for (let i = 0; i < 4; i++) {
                const day = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
                const dayName = i === 0 ? 'Today' : days[day.getDay()];
                const highTemp = Math.round(json.main.temp + (Math.random() * 5));
                const lowTemp = Math.round(json.main.temp - (Math.random() * 5));

                const forecastDay = document.createElement('div');
                forecastDay.className = 'forecast-day';
                forecastDay.innerHTML = `
                            <p class="day">${dayName}</p>
                            <p class="temp-high">${highTemp > 0 ? '+' : ''}${highTemp}°</p>
                            <p class="temp-low">${lowTemp > 0 ? '+' : ''}${lowTemp}°</p>
                        `;
                forecastDays.appendChild(forecastDay);
            }

            container.style.height = '700px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            hourlyForecast.classList.add('active');
            forecast.classList.add('active');
        })
        .catch(() => {
            container.style.height = '500px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            hourlyForecast.classList.remove('active');
            forecast.classList.remove('active');
            error404.classList.add('active');
        });
});

document.querySelector('.search-box input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});