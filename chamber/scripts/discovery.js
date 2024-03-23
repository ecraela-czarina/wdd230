
fetch('data/members.json')
    .then(response => response.json())
    .then(data => {

        const members = data.members;
        const membersList = document.getElementById('members-list');


        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.innerHTML = `
       <h2>${member.name}</h2>
       <p><strong>Address:</strong> ${member.address}</p>
       <p><strong>Phone:</strong> ${member.phone}</p>
       <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
       <p><strong>Membership Level:</strong> ${member.membership_level}</p>
       <p><strong>Vision:</strong> ${member.company_vision}</p>
       <img src="data/${member.image}" alt="${member.name} Logo" width="100">
     `;
            membersList.appendChild(memberDiv);
        });
    })
    .catch(error => console.error('Error fetching members:', error));