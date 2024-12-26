export {insertLocation};

/**
* This function is called by pressing the get my location button.
* It will insert the user's location into the latitude and logitude input field.
*/

function insertLocation() {

    let latitudeInput = document.querySelector('.latitudeInput');
    let longitudeInput = document.querySelector('.longitudeInput');

    if (!latitudeInput || !longitudeInput) {
        console.log("Error: Latitude and/or longitude input fields are missing.");
    }

    navigator.geolocation.getCurrentPosition(function(position) {

        latitudeInput.value = position.coords.latitude;
        longitudeInput.value = position.coords.longitude; 
    });
}
