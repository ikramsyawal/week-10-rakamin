require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const Sequelize = require("sequelize");

(async () => {
  try {
    await Sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
