// Initialize Google Map
function initMap() {
    // Create map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10, // Adjust zoom level as needed
        center: { lat: 20.4230, lng: -86.9223 } // Cozumel's coordinates
    });
    // Add markers for each location
    var marker1 = new google.maps.Marker({
        position: { lat: 20.4048290697387, lng: -86.97773869959344 }, // Location 1
        map: map,
        title: 'Location 1'
    });
    var marker2 = new google.maps.Marker({
        position: { lat: 20.47462384589817, lng: -86.87842629222088 }, // Location 2
        map: map,
        title: 'Location 2'
    });
}
