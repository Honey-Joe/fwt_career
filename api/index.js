const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.get("/", async (req, res) => {
  res.send("test api");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("The Server Running on port " + PORT);
});
