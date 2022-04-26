function setup() {
  noCanvas();
  const video = createCapture(VIDEO);
  video.size(320, 240);
  if ("geolocation" in navigator) {
    console.log("geolocation is available");
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { longitude, latitude } = position.coords;

      document.getElementById("lat").innerHTML = latitude;
      document.getElementById("lon").innerHTML = longitude;
      const btn = document.getElementById("btn");

      btn.addEventListener("click", () => {
        video.loadPixels();
        const image64 = video.canvas.toDataURL();

        const name = document.getElementById("name").value;
        sendGeolocation(latitude, longitude, name, image64);
        alert("Data sent successfully");
        name = document.getElementById("name").value = "";
      });
    });
  } else {
    console.log("geolocation is not available");
  }
}

async function sendGeolocation(latitude, longitude, name, image64) {
  const data = { latitude, longitude, name, image64 };
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
