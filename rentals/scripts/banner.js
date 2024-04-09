function closeMessage() {
    document.getElementById('weather-message').style.display = 'none';
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * (9 / 5) + 32;
}

function fetchWeatherData() {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.464445136120034&lon=-86.92198585159534&appid=ff2fd0ed392dc79d26e34dfc691614a9';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatures = data.list.map(item => item.main.temp_max);
            const highestTemperatureKelvin = Math.max(...temperatures);
            const highestTemperatureFahrenheit = kelvinToFahrenheit(highestTemperatureKelvin);

            document.getElementById('temperature-message').textContent = `Highest temperature for the day: ${highestTemperatureFahrenheit.toFixed(2)}°F`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

window.onload = fetchWeatherData;
