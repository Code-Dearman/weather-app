import {insertLocation} from './location_script.js';

/**
 * This generates the event listeners for the main page of the website.
 */
document.addEventListener('DOMContentLoaded', function() {

    /**
     * Event listnener for button which calls the function the get the user's
     * current location.
     */
    let locationButton = document.querySelector('.locationButton');
    locationButton.addEventListener('click', function(event) {

        event.preventDefault();
        insertLocation();
    });

    /**
     * Event listener for the next button on the main page.
     */
    let nextButton = document.querySelectorAll('.nextButton');
    nextButton.forEach(function(button) {
        button.addEventListener('click', function(event) {

            event.preventDefault();
            let current = document.querySelector('.current');
            let next = current.nextElementSibling;
            current.classList.remove('current');
            next.classList.add('current');
        });
    });

    /**
     * Event listener for the previous button on the main page.
     */


});