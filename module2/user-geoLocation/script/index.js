let firstTime = true;

const map = L.map("map").setView([0, 0], 1);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

if ("geolocation" in navigator) {
  console.log("geolocation is available");
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    marker.setLatLng([latitude, longitude]);
    if (firstTime) {
      map.setView([latitude, longitude], 13);
      firstTime = false;
    }
    document.getElementById("lat").innerHTML = latitude.toFixed(2);
    document.getElementById("lon").innerHTML = longitude.toFixed(2);
  });
} else {
  console.log("geolocation is available");
}
