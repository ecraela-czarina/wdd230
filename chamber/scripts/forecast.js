const url1 = 'https://api.openweathermap.org/data/2.5/forecast?lat=16.599406292101303&lon=120.32127006444036&appid=ff2fd0ed392dc79d26e34dfc691614a9';

fetch(url1)
    .then(response => response.json())
    .then(jsObject => {
        const threedayforecast = jsObject.list.filter(x => x.dt_txt.includes('15:00:00'));
        console.log(threedayforecast);
        for (let count = 1; count <= 3; count++) {
            const temperatureF = (threedayforecast[count - 1].main.temp_max - 273.15) * 9 / 5 + 32;
            document.getElementById(`forecast${count}`).textContent = temperatureF.toFixed(2);
        }
    });
