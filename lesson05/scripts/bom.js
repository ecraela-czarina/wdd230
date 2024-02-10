const buttonElement = document.querySelector('#button');
const inputElement = document.querySelector('#favchap');
const ulElement = document.querySelector('#list');

buttonElement.addEventListener('click', () => {

    if (inputElement.value.trim() !== '') {

        const li = document.createElement('li');


        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        li.textContent = inputElement.value;

        li.appendChild(deleteButton);

        ulElement.appendChild(li);

        deleteButton.addEventListener('click', () => {
            ulElement.removeChild(li);

            inputElement.focus();
        });


        inputElement.value = '';
    } else {

        console.log('Input is blank. Please enter a chapter.');

        inputElement.focus();
    }
});
