document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPageUrl = window.location.href;

    navLinks.forEach(function (navLink) {
        if (navLink.href === currentPageUrl) {
            navLink.classList.add('current-page');
            navLink.innerHTML += '<span class="current-indicator"></span>'; // Add dot indicator
        }
    });
});
