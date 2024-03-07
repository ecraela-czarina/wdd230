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

// Call the functions
initializeVisitCount();

// Call the functions
incrementVisitCount();
