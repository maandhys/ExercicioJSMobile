
function getLocation() {
    if (navigator.geolocation) {
        position = navigator.geolocation.getCurrentPosition(position);
    }
    function position(position) {
        document.getElementById("map").innerText = "Lat: " + position.coords.latitude +
            " Long: " + position.coords.longitude;
    }
}
window.onload = getLocation();