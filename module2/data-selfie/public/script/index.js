if ("geolocation" in navigator) {
  console.log("geolocation is available");
  navigator.geolocation.getCurrentPosition((position) => {
    const { longitude, latitude } = position.coords;

    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("lon").innerHTML = longitude;
  });
} else {
  console.log("geolocation is not available");
}
