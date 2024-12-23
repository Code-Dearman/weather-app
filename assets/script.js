import {insertLocation} from './location_script.js';

console.log('Hello, world!');
/**
 * This generates the event listeners for the main page of the website.
 */
document.addEventListener('DOMContentLoaded', function() {
    let locationButton = document.querySelector('.locationButton');

    locationButton.addEventListener('click', function(x) {
        console.log('Geolocation is available');
        navigator.geolocation.getCurrentPosition(function() {
            
            insertLocation()

            // console.log(position);
            // console.log(position.coords.latitude);
            // console.log(position.coords.longitude);
        });
    });

});

// if ("geolocation" in navigator) {
//   console.log("Geolocation is available");
// } else {
//   console.log("Geolocation is not available");
// }


// navigator.geolocation.getCurrentPosition(position => {
//   console.log(position.coords.latitude);
//   console.log(position.coords.longitude);
// });