// Fetching data from OpenWeatherMap API
fetch('https://api.openweathermap.org/data/2.5/forecast?lat=20.464445136120034&lon=-86.92198585159534&appid=ff2fd0ed392dc79d26e34dfc691614a9')
    .then(response => response.json())
    .then(data => {
        // Find tomorrow's forecast at 3:00 PM
        const tomorrowForecast = data.list.find(item => {
            const forecastDateTime = new Date(item.dt * 1000);
            const tomorrowDate = new Date();
            tomorrowDate.setDate(tomorrowDate.getDate() + 1);
            return forecastDateTime.getDate() === tomorrowDate.getDate() && forecastDateTime.getHours() === 15;
        });

        // Update HTML with forecast temperature
        if (tomorrowForecast) {
            // Convert temperature from Kelvin to Fahrenheit
            const tempInFahrenheit = ((tomorrowForecast.main.temp - 273.15) * 9 / 5) + 32;
            document.getElementById('forecastTomorrow').textContent = tempInFahrenheit.toFixed(2);
        } else {
            document.getElementById('forecastTomorrow').textContent = 'N/A';
        }
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('forecastTomorrow').textContent = 'N/A';
    });
