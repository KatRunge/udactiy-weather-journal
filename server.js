// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// // Initialize the main project folder
app.use(express.static("website"));

const port = 3000;

// // Setup Server

const server = app.listen(port, listening);
function listening() {
  console.log(`running on localhost: ${port}`);
}

// GET route
app.get("/get", sendData);

function sendData(req, res) {
  res.send(projectData);
}

// // POST route
app.post("/post", addWeather);
function addWeather(req, res) {
  newEntry = {
    city: req.body.city,
    temperature: req.body.temperature,
    feelings: req.body.feelings,
    date: req.body.date,
  };
  res.send(projectData);
  console.log(newEntry);
}
