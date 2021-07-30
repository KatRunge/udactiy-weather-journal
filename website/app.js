/* Global Variables */

let baseURL =
  "api.openweathermap.org/data/2.5/weather?q=London&appid=122ce078cd71684983156bf14ff9424b";
let apiKey = "&appid={122ce078cd71684983156bf14ff9424b}";
const newZip = document.getElementById("zip").value;

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  getWeather(baseURL);
}

const getWeather = async (baseURL) => {
  // 1.
  const res = await fetch(baseURL);
  try {
    const data = await res.json();
    console.log(data);
    // 1. We can do something with our returned data here-- like chain promises!

    // 2.
    // postData('/addAnimal', data)
  } catch (error) {
    // appropriately handle the error
    console.log("error", error);
  }
};

// const postData = async (url = "", data = {}) => {
//   const response = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   try {
//     const newData = await response.json();
//     return newData;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
