document.addEventListener('DOMContentLoaded', function () {

    var copyrightYear = new Date().getFullYear();
    document.getElementById('copyrightYear').innerHTML = "&copy; " + copyrightYear + "<br>Czarina Ecraela<br> Philippines 🇵🇭";

    var lastModified = document.getElementById('lastModified');
    lastModified.textContent = "Last Modified: " + document.lastModified;
});
