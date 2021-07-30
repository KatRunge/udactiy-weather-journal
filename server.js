// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

const port = 3000;

// Setup Server
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
}

app.get("/all", sendData);

function sendData(req, response) {
  response.send(projectData);
}

// POST route
app.post("/add", callBack);

function callBack(req, res) {
  res.send("POST received");
}

// POST an animal
const data = [];

app.post("/animal", addAnimal);

function addAnimal(req, res) {
  data.push(req.body);
}