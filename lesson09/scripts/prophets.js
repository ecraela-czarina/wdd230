const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data); // Comment out the console line
        displayProphets(data.prophets); // Call the displayProphets function with data.prophets argument
        return data; // You can return the data if needed for further processing
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        const card = document.createElement('section');
        card.classList.add('card');

        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        fullName.classList.add('card-item');

        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '300');
        portrait.classList.add('card-item');

        const birthDate = document.createElement('p');
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthDate.classList.add('card-item');

        const placeOfBirth = document.createElement('p');
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        placeOfBirth.classList.add('card-item');


        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthDate);
        card.appendChild(placeOfBirth);

        cards.appendChild(card);
    });
}

getProphetData(); // Call the function to test the fetch and response
