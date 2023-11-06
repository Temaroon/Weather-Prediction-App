const apikey = "cbdab5cb06942749d27acf2782f17dc9";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});
console.log(weatherDataEl)

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

    if (!response.ok) {
      throw new Error("Network did not response!!");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp)

    const description = data.weather[0].description

    const icon = data.weather[0].icon

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed: ${data.wind.speed} m/s`,
    ];

    weatherDataEl.querySelector(".icon").innerHTML = `<img
    src="http://openweathermap.org/img/wn/${icon}.png"
    alt="Weather Icon" />`
    weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = '';
    weatherDataEl.querySelector(".temperature").textContent = '';
    weatherDataEl.querySelector(".description").textContent = 'Error, city not found!';
    weatherDataEl.querySelector(".details").innerHTML = '';
  }
}

const textField = document.getElementById('city-input');

document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    textField.focus();
  } else textField.focus();
});

const myTextField = document.getElementById('city-input');

textField.addEventListener('input', function (event) {
  const inputValue = event.target.value;
  const regex = /^[a-zA-Z\s]*$/;

  if (!regex.test(inputValue)) {
    myTextField.value = inputValue.replace(/[^a-zA-Z\s]/g, '');
  }
});
