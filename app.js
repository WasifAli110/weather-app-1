
// https://rapidapi.com/hub
// skeleton loading

// https://home.openweathermap.org/api_keys
const API_KEY = "1fd81b0b4f06557a3612715f3503d90b";
const form = document.querySelector("#myForm");
const cityInput = document.querySelector("#cityInput");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const message = document.querySelector("#message");
const btn = document.querySelector("#getWeatherBtn");

const formHandler = async (event) => {
  try {
    event.preventDefault(); // prevents page refresh

    message.innerText = "loading..."; // showing loading
    temp.innerText = "";
    humidity.innerText = "";
    btn.disabled = true; // disable button so user doesn't click button more than once

    const city = cityInput.value;

    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    message.innerText = ""; // clearing old msgs

    form.reset(); // to clear input value only if form is submitted successfully

    temp.innerText = `${response.data.main.temp}°C`;
    humidity.innerText = response.data.main.humidity;

    console.log("🚀 ~ formHandler ~ response:", response.data);
  } catch (error) {
    console.log(error);

    message.innerText = error?.response?.data?.message || "unknown error";
  }
};

form.addEventListener("submit", formHandler);
