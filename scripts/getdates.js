document.addEventListener('DOMContentLoaded', function () {

    var copyrightYear = new Date().getFullYear();
    document.getElementById('copyrightYear').innerHTML = "&copy; " + copyrightYear + "<br>Czarina Ecraela<br> Philippines 🇵🇭";

    var lastModified = document.getElementById('lastModified');
    lastModified.textContent = "Last Modified: " + document.lastModified;
});


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const map = document.querySelector('.map');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    map.classList.toggle('invisible');
});


// Number of Visits

// Function to increment and update the visit count
function incrementVisitCount() {
    let visitCount = localStorage.getItem('visitCount');

    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;

    localStorage.setItem('visitCount', visitCount);

    document.getElementById('visit-count').textContent = visitCount;
}


function initializeVisitCount() {
    let visitCount = localStorage.getItem('visitCount');

    if (visitCount) {
        document.getElementById('visit-count').textContent = visitCount;
    } else {
        localStorage.setItem('visitCount', 0);
    }
}

initializeVisitCount();


incrementVisitCount();


// API Key - Weather


const apiKey = 'ff2fd0ed392dc79d26e34dfc691614a9';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.5622&lon=-111.9297&appid=' + apiKey;

// Function to fetch weather data from the API
async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

// Function to update the HTML content with weather data
async function updateWeather() {
    const weatherData = await getWeather();
    document.getElementById('temperature').textContent = `${(weatherData.main.temp - 273.15).toFixed(2)}°C`;
    document.getElementById('description').textContent = weatherData.weather[0].description;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    document.getElementById('visit-count').textContent = parseInt(localStorage.getItem('visitCount') || 0) + 1;
}

// Update weather data when the page loads
updateWeather();



