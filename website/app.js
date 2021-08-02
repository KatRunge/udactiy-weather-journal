// /* Global Variables */

// let baseURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=";
// let apiKey = "122ce078cd71684983156bf14ff9424b";
// const newZip = document.getElementById("zip").value;

// document.getElementById("generate").addEventListener("click", performAction);

// function performAction(e) {
//   getWeather(baseURL, apiKey);
// }

// const getWeather = async (url, key) => {
//   // 1.
//   const res = await fetch(url + key);
//   try {
//     const data = await res.json();
//     console.log(data);
//     // 1. We can do something with our returned data here-- like chain promises!

//     // 2.
//     // postData('/addAnimal', data)
//   } catch (error) {
//     // appropriately handle the error
//     console.log("error", error);
//   }
// };

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

postData('', {answer:42});

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
