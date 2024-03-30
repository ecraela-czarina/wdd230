// Select HTML elements in the document
const currentTemperatureElement = document.getElementById('currentTemperature');
const currentWindSpeedElement = document.getElementById('currentWindSpeed');
const windChillFactorElement = document.getElementById('windChillFactor');
const weatherElement = document.getElementById('weather');
const weatherIconElement = document.getElementById('weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather';

const lat = '16.599406292101303';
const lon = '120.32127006444036';


const apiKey = 'ff2fd0ed392dc79d26e34dfc691614a9';


const queryString = `?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;


async function apiFetch() {
    try {

        const response = await fetch(url + queryString);

        if (response.ok) {

            const data = await response.json();

            console.log('API Data:', data);

            currentTemperatureElement.textContent = data.main.temp;

            currentWindSpeedElement.textContent = data.wind.speed;

            const windSpeed = data.wind.speed;
            const temperature = data.main.temp;
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillFactorElement.textContent = windChill;

            weatherElement.textContent = data.weather[0].description;


            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
            weatherIconElement.src = iconUrl;
            weatherIconElement.alt = data.weather[0].description;
        } else {

            throw new Error('Unable to fetch weather data');
        }
    } catch (error) {

        console.error('Error fetching data:', error.message);
    }
}

// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Formula to calculate wind chill factor
    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return windChill.toFixed(2); // Round to 2 decimal places
}



// Invoke the apiFetch function
apiFetch();



