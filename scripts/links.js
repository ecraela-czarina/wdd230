const baseURL = "https://ecraela-czarina.github.io/wdd230/";
const linksURL = "https://ecraela-czarina.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
        return data;
    } catch (error) {
        console.error("Error fetching links data:", error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('links-container');

    weeks.forEach(week => {
        const weekHeader = document.createElement('h2');
        weekHeader.textContent = `Week ${week.week}`;
        linksContainer.appendChild(weekHeader);

        const linksList = document.createElement('ul');

        week.links.forEach(link => {
            const linkItem = document.createElement('li');
            const linkAnchor = document.createElement('a');
            linkAnchor.href = link.url;
            linkAnchor.textContent = link.title;
            linkItem.appendChild(linkAnchor);
            linksList.appendChild(linkItem);
        });

        linksContainer.appendChild(linksList);
    });
}

getLinks();