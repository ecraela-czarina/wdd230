// Function to shuffle array randomly
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

fetch('data/members.json')
    .then(response => response.json())
    .then(jsonData => {
        var silverGoldMembers = jsonData.members.filter(function (member) {
            return member.membership_level === "Silver" || member.membership_level === "Gold";
        });

        var shuffledMembers = shuffleArray(silverGoldMembers);

        var spotlightList = document.getElementById("spotlight-list");


        spotlightList.innerHTML = "";


        var numSpotlights = Math.floor(Math.random() * 2) + 2;
        shuffledMembers.slice(0, numSpotlights).forEach(function (member) {
            var listItem = document.createElement("li");
            listItem.innerHTML = "<strong>" + member.name + "</strong><br>" +
                "Membership Level: " + member.membership_level + "<br>" +
                member.company_vision;
            spotlightList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
