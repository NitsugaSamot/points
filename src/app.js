const express = require("express");

const pointsRoutes = require("./routes/points.routes")

const cors = require("cors");
const app = express();

//middleware:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/points", pointsRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

module.exports = app;
