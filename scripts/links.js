const baseURL = "https://ecraela-czarina.github.io/wdd230/";
const linksURL = "https://ecraela-czarina.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log("Data from JSON:", data);
        displayLinks(data.lessons);
        return data;
    } catch (error) {
        console.error("Error fetching links data:", error);
    }
}

function displayLinks(lessons) {
    const linksContainer = document.getElementById('links-container');
    let currentLessonNumber = null;

    lessons.forEach(lesson => {
        if (lesson.lesson !== currentLessonNumber) {
            if (currentLessonNumber !== null) {
                linksContainer.appendChild(document.createElement('br'));
            }
            currentLessonNumber = lesson.lesson;
            const lessonHeader = document.createElement('span');
            lessonHeader.textContent = `Lesson ${lesson.lesson}: `;
            linksContainer.appendChild(lessonHeader);
        } else {
            linksContainer.appendChild(document.createTextNode(' | '));
        }

        // Create a link for each lesson title
        lesson.links.forEach((link, index) => {
            const linkAnchor = document.createElement('a');
            linkAnchor.href = baseURL + link.url;
            linkAnchor.textContent = link.title;
            linksContainer.appendChild(linkAnchor);
            if (index < lesson.links.length - 1) {
                linksContainer.appendChild(document.createTextNode(' | '));
            }
        });

        linksContainer.appendChild(document.createTextNode(' '));
    });
}

getLinks();
