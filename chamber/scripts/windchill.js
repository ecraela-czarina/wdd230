// Function to calculate wind chill factor
function calculateWindChill() {
    // Get temperature and wind speed values from HTML document
    var temperature = parseFloat(document.getElementById('currentTemperature').innerText);
    var windSpeed = parseFloat(document.getElementById('currentWindSpeed').innerText);

    // Check if input values meet specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill factor using the formula
        var windChillFactor = calculateWindChillFactor(temperature, windSpeed);
        // Display the wind chill factor
        document.getElementById('windChillFactor').innerText = windChillFactor.toFixed(2) + " °F";
    } else {
        // Display "N/A" if input values do not meet requirements
        document.getElementById('windChillFactor').innerText = "N/A";
    }
}

// Function to calculate wind chill factor using the formula
function calculateWindChillFactor(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

// Call the function to calculate wind chill factor
calculateWindChill();
