// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather';


const lat = '49.749992';
const lon = '6.637143';


const apiKey = 'ff2fd0ed392dc79d26e34dfc691614a9';
// Define the query string
const queryString = `?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;


async function apiFetch() {
    try {

        const response = await fetch(url + queryString);


        if (response.ok) {

            const data = await response.json();


            console.log('API Data:', data);


            currentTemp.textContent = data.main.temp + ' °F';

            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
            weatherIcon.src = iconUrl;
            weatherIcon.alt = data.weather[0].description;

            captionDesc.textContent = data.weather[0].description;
        } else {

            throw new Error('Unable to fetch weather data');
        }
    } catch (error) {

        console.error('Error fetching data:', error.message);
    }
}


apiFetch();
