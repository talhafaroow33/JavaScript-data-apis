if ("geolocation" in navigator) {
  console.log("geolocation is available");
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { longitude, latitude } = position.coords;

    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("lon").innerHTML = longitude;
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
      sendGeolocation(latitude, longitude);
    });
  });
} else {
  console.log("geolocation is not available");
}

async function sendGeolocation(latitude, longitude) {
  const data = { latitude, longitude };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api", options);
  const responseData = await response.json();
  console.log("<<<<<<response", responseData);
}
