
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
