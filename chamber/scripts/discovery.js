document.addEventListener("DOMContentLoaded", function () {
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');
    const membersList = document.getElementById('members-list');

    // Add event listeners to the buttons
    gridButton.addEventListener('click', function () {
        membersList.classList.remove('list-view');
        membersList.classList.add('grid-view');
    });

    listButton.addEventListener('click', function () {
        membersList.classList.remove('grid-view');
        membersList.classList.add('list-view');
    });

    // Fetching data
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.members;

            members.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.innerHTML = `
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                    <p><strong>Vision:</strong> ${member.company_vision}</p>
                
                `;
                membersList.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error fetching members:', error));
});
