// /* Global Variables */

// APi base url for getting zip code data
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
// API key to complete baseUrl
const apiKey = "&appid=122ce078cd71684983156bf14ff9424b&units=metric";
// get element where the zip data will be added
const zip = document.getElementById("inputZip");
// get element where the country code will be added
const country = document.getElementById("country");

// Create a new date instance dynamically with JS
let d = new Date();
// added a +1 to the month becuase th emonth shown was not correct
let date = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// event for the submit button
document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  // get element where the feelings data will be submited
  const feelings = document.getElementById("feelings").value;
  getWeather(baseURL, zip.value + ",", country.value, apiKey).then(function (
    data
  ) {
    //data i want to show in the new entry
    postData("/post", {
      city: data.name,
      temperature: data.main.temp,
      feelings: feelings,
      date,
    });
    //call function to show data in new entry
    newEntryData();
  });
}

// get data from the API url
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

// create new entry with new data
const newEntryData = async () => {
  const request = await fetch("/get");
  try {
    const allData = await request.json();
    document.getElementById("city").innerHTML = allData.city;
    document.getElementById("temp").innerHTML = allData.temperature + " C°";
    document.getElementById("feels").innerHTML = allData.feelings;
    document.getElementById("date").innerHTML = allData.date;
  } catch (error) {
    console.log("error", error);
  }
};
