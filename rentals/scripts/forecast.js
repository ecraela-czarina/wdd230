function getTomorrowDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // Add one day
    return tomorrow.toISOString().split('T')[0]; // Format as YYYY-MM-DD
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * (9 / 5) + 32;
}

function fetchTomorrowForecast() {
    const tomorrowDate = getTomorrowDate();
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.464445136120034&lon=-86.92198585159534&appid=ff2fd0ed392dc79d26e34dfc691614a9`;

    console.log("API URL:", apiUrl);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("API Response:", data);

            const forecast = data.list.find(item => item.dt_txt.includes(`${tomorrowDate} 15:00:00`)); // Find forecast for 3:00 pm tomorrow
            if (!forecast) {
                throw new Error('No forecast data found for 3:00pm tomorrow');
            }

            const temperatureKelvin = forecast.main.temp;
            const temperatureFahrenheit = kelvinToFahrenheit(temperatureKelvin);

            console.log("Temperature (Kelvin):", temperatureKelvin);
            console.log("Temperature (Fahrenheit):", temperatureFahrenheit);

            document.getElementById('forecastTomorrow').textContent = temperatureFahrenheit.toFixed(2);
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
        });
}

window.onload = fetchTomorrowForecast;
