const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const allData = [];

app.post("/api/", (require, response) => {
  console.log(require.body);
  const data = require.body;
  allData.push(data);
  response.json(allData);
  console.log(allData);
});

// Making a simple request to the server

// app.post("/api/", (require, response) => {
//   console.log(require.body);
//   const { latitude, longitude } = require.body;
//   response.json({
//     status: "success",
//     latitude: latitude,
//     longitude: longitude,
//   });
// });
