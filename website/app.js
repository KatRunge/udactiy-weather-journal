// /* Global Variables */

let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=122ce078cd71684983156bf14ff9424b";
const zip = document.getElementById("inputZip");
const country = document.getElementById("code");
const feelings = document.getElementById("feelings");

// // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", performAction);

function performAction() {
  getWeather(baseURL, zip.value + ",", country.value, apiKey)
    .then(function (data) {
      postData("/", {
        city: data.name,
        temperature: data.main.temp,
        feelings: feelings.value,
        newDate,
      });
    })
    updateUI();
}

const getWeather = async (url, zip, country, key) => {
  const res = await fetch(url + zip + country + key);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};


const updateUI = async (url = "/") => {
  const request = await fetch(url);
  try {
    const allData = await request.json();
    console.log(allData);
    document.getElementById("city").innerHTML = allData.city;
    document.getElementById("temp").innerHTML = allData.temperature;
    document.getElementById("feelings").innerHTML = allData.feelings;
    document.getElementById("date").innerHTML = allData.newDate;
  } catch (error) {
    console.log("error", error);
  }
};