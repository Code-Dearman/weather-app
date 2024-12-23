import {insertLocation} from './location_script.js';

/**
 * This generates the event listeners for the main page of the website.
 */
document.addEventListener('DOMContentLoaded', function() {
    let locationButton = document.querySelector('.locationButton');

    locationButton.addEventListener('click', function(event) {

        event.preventDefault();
        insertLocation();
    });

});