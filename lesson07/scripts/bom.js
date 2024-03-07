const buttonElement = document.querySelector('#button');
const inputElement = document.querySelector('#favchap');
const ulElement = document.querySelector('#list');

buttonElement.addEventListener('click', () => {
    if (inputElement.value.trim() !== '') {
        const chapter = inputElement.value;
        displayList(chapter); // Call displayList with input value
        chaptersArray.push(chapter); // Push input value into chaptersArray
        setChapterList(chaptersArray); // Update localStorage with the new array
        inputElement.value = ''; // Set input value to nothing
        inputElement.focus(); // Set focus back to the input
    } else {
        console.log('Input is blank. Please enter a chapter.');
        inputElement.focus();
    }
});

const chaptersArray = getChapterList() || [];

function getChapterList() {
    const storedChapters = localStorage.getItem('chapters');
    return storedChapters ? JSON.parse(storedChapters) : [];
}

// Populating the displayed list of chapters
chaptersArray.forEach(chapter => displayList(chapter));

// Function to display a chapter in the list
function displayList(chapter) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    li.textContent = chapter;
    li.appendChild(deleteButton);
    ulElement.appendChild(li);
    deleteButton.addEventListener('click', () => {
        ulElement.removeChild(li);
        deleteChapter(chapter); // Pass entire chapter string to deleteChapter
        inputElement.focus();
    });
}

function setChapterList(chaptersArray) {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    // Remove the chapter from chaptersArray
    chaptersArray.splice(chaptersArray.indexOf(chapter), 1);

    // Call setChapterList to update the localStorage item
    setChapterList(chaptersArray);

    // Update the displayed list of chapters
    updateDisplayedChapters();
}

function updateDisplayedChapters() {
    // Clear the existing list
    ulElement.innerHTML = '';

    // Repopulate the displayed list of chapters
    chaptersArray.forEach(chapter => displayList(chapter));
}
