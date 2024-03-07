// Function to calculate wind chill factor
function calculateWindChill() {
    // Get temperature and wind speed values from HTML document
    var temperature = parseFloat(document.getElementById('currentTemperature').innerText);
    var windSpeed = parseFloat(document.getElementById('currentWindSpeed').innerText);

    if (temperature <= 134 && windSpeed > 3.0) {
        var windChillFactor = calculateWindChillFactor(temperature, windSpeed);
        document.getElementById('windChillFactor').innerText = windChillFactor.toFixed(2);
    } else {
        document.getElementById('windChillFactor').innerText = "N/A";
    }
}

function calculateWindChillFactor(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

calculateWindChill();
