require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");
const db = require("./models/index");

const testConnection = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
