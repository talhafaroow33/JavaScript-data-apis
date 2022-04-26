const express = require("express");
const Datastore = require("nedb");

const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();

const allData = [];

app.get("/api/", (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post("/api/", (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});

// Making a simple request to the server

// app.post("/api/", (require, response) => {
//   console.log(require.body);
//   const { latitude, longitude } = require.body;
// response.json({
//   status: "success",
//   latitude: latitude,
//   longitude: longitude,
// });
// });
