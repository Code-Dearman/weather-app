export {insertLocation};

/**
* This function is called by pressing the get my location button.
* It will insert the user's location into the latitude and logitude input field.
*/
function insertLocation() {

    let latitudeInput = document.querySelector('.latitude');
    let longitudeInput = document.querySelector('.longitude');

    if (!latitudeInput || !longitudeInput) {
        console.log("Error: Latitude and/or longitude input fields are missing.");
    }

    navigator.geolocation.getCurrentPosition(function(position) {

        console.log(position.coords.latitude);
        latitudeInput.value = position.coords.latitude;
        longitudeInput.value = position.coords.longitude; 
    });
}
console.log("Hello!");
