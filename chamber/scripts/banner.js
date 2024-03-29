
function closeBanner() {
    var banner = document.getElementById('banner');
    banner.style.display = 'none';
}

function checkAndDisplayBanner() {
    var banner = document.getElementById('banner');

    var computedStyle = window.getComputedStyle(banner);
    if (computedStyle.display === "none") {
        var today = new Date();
        var dayOfWeek = today.getDay();
        if (dayOfWeek >= 1 && dayOfWeek <= 3) {
            banner.style.display = 'flex';
        } else {
            banner.style.display = 'none';
        }
    }
}


// window.onload = function () {
checkAndDisplayBanner();
// };
