const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

});

// Mode

const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.classList.remove("light-mode");
        main.classList.add("dark-mode");
        modeButton.textContent = "🔆";
    } else {
        main.classList.remove("dark-mode");
        main.classList.add("light-mode");
        modeButton.textContent = "🕶️";
    }
});






document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();

    function generateCalendar(year, month) {
        var calendar = document.getElementById("calendar");
        var header = document.getElementById("currentMonthYear");
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var firstDayOfMonth = new Date(year, month, 1).getDay();


        calendar.innerHTML = "";


        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        header.textContent = monthNames[month] + " " + year;


        var table = document.createElement("table");
        calendar.appendChild(table);

        // Create table header with day names
        var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        for (var i = 0; i < 7; i++) {
            var th = document.createElement("th");
            th.textContent = dayNames[i];
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);

        // Create table body with calendar dates
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        var date = 1;
        for (var i = 0; i < 6; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    var td = document.createElement("td");
                    tr.appendChild(td);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    var td = document.createElement("td");
                    td.textContent = date;
                    if (year === currentYear && month === currentMonth && date === currentDate.getDate()) {
                        td.classList.add("today");
                    }
                    tr.appendChild(td);
                    date++;
                }
            }
            tbody.appendChild(tr);
        }
    }

    generateCalendar(currentYear, currentMonth);
});


// Lazy load

var lazyImages = document.querySelectorAll('.lazy-image');


// Local Storage

document.addEventListener("DOMContentLoaded", function () {
    var sidebarContent = document.getElementById("localStorage");
    var lastVisit = localStorage.getItem("lastVisit");
    var currentDate = new Date();
    var message;

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        var daysSinceLastVisit = Math.floor((currentDate - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = "You last visited " + daysSinceLastVisit + " days ago.";
        }
    }

    sidebarContent.textContent = message;

    // Store current visit date in localStorage
    localStorage.setItem("lastVisit", currentDate);
});


// trivia

function setRandomTrivia() {
    // Define an array containing the three trivias
    const trivias = [
        "Did you know that businesses in a Chamber of Commerce enjoy increased credibility and trust from consumers?",
        "Did you know that joining a Chamber of Commerce offers valuable networking opportunities with other businesses and industry leaders?",
        "Did you know that Chambers of Commerce advocate for business-friendly policies, supporting economic growth and development?",
        "Did you know that Chamber members often receive discounts on business services and products?",
        "Did you know that Chambers of Commerce organize community events and activities, fostering local engagement and support?",
        "Did you know that businesses in a Chamber of Commerce have access to educational resources and workshops to enhance their skills and knowledge?",
        "Did you know that joining a Chamber of Commerce can improve a business's visibility and exposure within the community?",
        "Did you know that Chambers of Commerce often collaborate with local government and organizations to address community needs and concerns?",
        "Did you know that businesses in a Chamber of Commerce can participate in committees and task forces to shape local policies and initiatives?",
        "Did you know that Chambers of Commerce offer promotional opportunities, such as featured listings and sponsorships, to help businesses market themselves?"
    ];

    // Get the <p> element by its ID
    const triviaElement = document.getElementById('trivia');

    // Generate a random index to select a random trivia
    const randomIndex = Math.floor(Math.random() * trivias.length);

    // Update the text inside the <p> element with the selected trivia
    triviaElement.textContent = trivias[randomIndex];
}

// Call the function
window.onload = setRandomTrivia;

document.getElementById('dateTime').value = Date.now();


// Responsive Text
var dynamicText = document.getElementById("dynamicText");

function updateText() {

    var screenWidth = window.innerWidth;


    var newText = "";
    if (screenWidth < 768) {
        newText = "Small";
    } else if (screenWidth >= 768 && screenWidth < 1024) {
        newText = "Medium";
    } else {
        newText = "Large";
    }


    dynamicText.textContent = newText;
}

// Call the updateText function initially to set the text based on the initial screen width
updateText();

// Add an event listener to update text when the screen is resized
window.addEventListener("resize", updateText);



