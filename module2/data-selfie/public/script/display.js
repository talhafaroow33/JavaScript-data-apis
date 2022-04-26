async function getData() {
  const response = await fetch("api");
  const data = await response.json();
  return data;
}

async function displayList() {
  const data = await getData();
  const list = document.getElementById("list");

  for (item of data) {
    const { latitude, longitude, name, timestamp, image64 } = item;
    const listItem = document.createElement("li");
    const nameElement = document.createElement("div");
    const latitudeElement = document.createElement("div");
    const longitudeElement = document.createElement("div");
    const timestampElement = document.createElement("div");
    const image = document.createElement("img");
    const lineBreakElement = document.createElement("br");

    nameElement.textContent = `Name: ${name}`;
    latitudeElement.textContent = `Latitude: ${latitude}`;
    longitudeElement.textContent = `Longitude: ${longitude}`;
    timestampElement.textContent = `Timestamp: ${timestamp}`;
    image.src = image64;

    listItem.append(
      nameElement,
      latitudeElement,
      longitudeElement,
      timestampElement,
      image,
      lineBreakElement
    );
    list.appendChild(listItem);
  }
}

displayList();
