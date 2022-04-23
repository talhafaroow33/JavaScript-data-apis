const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
let firstTime = true;

// Making a map and tiles
const map = L.map("ISSmap").setView([0, 0], 1);
const attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileURL, { attribution });
tiles.addTo(map);

// Making a custom marker
const myIcon = L.icon({
  iconUrl: "./img/iss200.png",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});
const marker = L.marker([0, 0], { icon: myIcon }).addTo(map);

async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude } = data;
  marker.setLatLng([latitude, longitude]);

  if (firstTime) {
    map.setView([latitude, longitude], 2);
    firstTime = false;
  }

  document.getElementById("lat").innerHTML = latitude.toFixed(2);
  document.getElementById("lon").innerHTML = longitude.toFixed(2);
  console.log("hello");
}

getISS();
setInterval(getISS, 1000);
