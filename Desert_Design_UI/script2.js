function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}


document.addEventListener("DOMContentLoaded", function() {
  // Find the LinkedIn anchor tag by its id
  const linkedinLink = document.getElementById("linkedin-link");

  // Add a click event listener to it
  linkedinLink.addEventListener("click", function(event) {
    // Prevent the default behavior of the link (to avoid navigating to "#" or the current page)
    event.preventDefault();

    // Redirect to the LinkedIn profile URL
    window.location.href = "https://www.linkedin.com/in/tadhgmaher/";
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    const email = "Tadhgmaher54@gmail.com";
  
    copyEmailBtn.addEventListener("click", function() {
      // Create a text area element to hold the email
      const textArea = document.createElement("textarea");
      textArea.value = email;
  
      // Append the text area to the document
      document.body.appendChild(textArea);
  
      // Select the text in the text area
      textArea.select();
  
      // Copy the text to the clipboard
      document.execCommand("copy");
  
      // Remove the text area
      document.body.removeChild(textArea);
  
      // Notify the user that the email has been copied
      alert("Email address copied to clipboard: " + email);
    });
  });


const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

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

    // Add listener for the marker drag event
    marker.addListener('dragend', function () {
        updateMap(marker.getPosition().lat(), marker.getPosition().lng());
    });

    // Create the search box and link it to the UI element.
    const input = document.getElementById('search');
    const searchBox = new google.maps.places.SearchBox(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log('Returned place contains no geometry');
                return;
            }

            // Set the position of the marker using the place's location.
            marker.setPosition(place.geometry.location);
            updateMap(place.geometry.location.lat(), place.geometry.location.lng());

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

function updateMap(lat, lng) {
    // Update the map center
    map.setCenter({ lat: lat, lng: lng });

    // You can perform additional tasks when the marker location is updated
    console.log('Marker location updated to: ' + lat + ', ' + lng);
}

function searchPlace() {
    // Perform the search when the button is clicked
    const input = document.getElementById('search');
    const searchBox = new google.maps.places.SearchBox(input);
    const places = searchBox.getPlaces();

    if (places.length === 0) {
        return;
    }

    const place = places[0];
    marker.setPosition(place.geometry.location);
    updateMap(place.geometry.location.lat(), place.geometry.location.lng());
}
