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


// Select HTML elements in the document
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
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


            temperatureElement.textContent = data.main.temp + ' °F';


            descriptionElement.textContent = data.weather[0].description;


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


apiFetch();



