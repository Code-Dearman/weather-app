function insertLocation() {
    let locationInput = document.querySelector('.locationInput');
    navigator.geolocation.getCurrentPosition(function(position) {
        locationInput.value = position.coords.latitude + ',' + position.coords.longitude;
    });
}