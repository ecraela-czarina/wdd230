window.addEventListener('load', function () {
    fetchWeatherData();
});

async function fetchWeatherData() {
    const apiKey = 'ff2fd0ed392dc79d26e34dfc691614a9';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=20.464445136120034&lon=-86.92198585159534&units=imperial&appid=' + apiKey;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeatherInfo(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherInfo(data) {
    const currentTemperatureElement = document.getElementById('currentTemperature');
    const currentHumidityElement = document.getElementById('currentHumidity');
    const weatherTitleElement = document.getElementById('weatherTitle');
    const weatherDescriptionElement = document.getElementById('weatherDescription');
    const weatherIconElement = document.getElementById('weather-icon');

    // Update HTML elements with weather data
    currentTemperatureElement.textContent = data.main.temp;
    currentHumidityElement.textContent = data.main.humidity;
    weatherTitleElement.textContent = data.weather[0].main;
    weatherDescriptionElement.textContent = data.weather[0].description;

    // Set weather icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIconElement.src = iconUrl;
    weatherIconElement.alt = data.weather[0].description;
}
