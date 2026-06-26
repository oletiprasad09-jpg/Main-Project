const express = require("express");
const cors = require("cors");
const parkingData = require("./data.json");

const app = express();

app.use(cors());

app.get("/parking", (req, res) => {
  res.json(parkingData);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});