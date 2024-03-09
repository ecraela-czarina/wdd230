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

