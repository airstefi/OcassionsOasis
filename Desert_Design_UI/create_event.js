
let map;
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 2
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP
    });

    const input = document.getElementById('event-location');
    const searchBox = new google.maps.places.SearchBox(input);
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('places_changed', function () {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
            return;
        }
        marker.setPosition(places[0].geometry.location);
        map.setCenter(places[0].geometry.location);
    });
}

document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can handle the form submission, e.g., send data to a server or update the UI
    alert('Event created!');
});
