document.addEventListener('DOMContentLoaded', function () {

    var copyrightYear = new Date().getFullYear();
    document.getElementById('copyrightYear').innerHTML = "&copy; " + copyrightYear + "<br>Czarina Ecraela<br> Philippines 🇵🇭";

    var lastModified = document.getElementById('lastModified');
    lastModified.textContent = "Last Modified: " + document.lastModified;
});


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation-index');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    map.classList.toggle('invisible');
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



