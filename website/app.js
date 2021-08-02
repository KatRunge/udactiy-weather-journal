// /* Global Variables */

let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=122ce078cd71684983156bf14ff9424b";
const newZip = document.getElementById("zip").value;
const newCountry = document.getElementById("code").value;

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  getWeather(baseURL, newZip + ",", newCountry, apiKey)
    .then(function (data) {
      postData("/", {
        zip: data.zip,
        country: data.country,
      });
    })
    .then(updateUI());
}

const updateUI = async () => {
  const request = await fetch("/");
  try {
    const allData = await request.json();
    document.getElementById("cityZip").innerHTML = allData[0].zip;
    document.getElementById("countryCode").innerHTML = allData[0].country;
  } catch (error) {
    console.log("error", error);
  }
};

const getWeather = async (url, zip, country, key) => {
  const res = await fetch(url + zip + country + key);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
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
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

postData("", { answer: 42 });

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
