/**
* This function is called by pressing the get my location button.
* It will insert the user's location into the location input field.
*/
function insertLocation() {

    let locationInput = document.querySelector('.locationInput');

    navigator.geolocation.getCurrentPosition(function(position) {
        latitudeInput.value = position.coords.latitude;
        longirtudeInput.value = position.coords.longitude;
        console.log(locationInput.value);
    });

    console.log("Hello!");
}

export {insertLocation};