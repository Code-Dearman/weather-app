console.log('Hello from script.js');

if ("geolocation" in navigator) {
  console.log("Geolocation is available");
} else {
  console.log("Geolocation is not available");
}

navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});