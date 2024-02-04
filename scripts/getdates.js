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
    map.classList.toggle('invisible'); // Toggle the 'invisible' class on the map element
});
