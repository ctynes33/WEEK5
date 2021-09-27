
function formatDate(current) {
  let hours = current.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let min = current.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let dayIndex = current.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  let day = days[dayIndex];
  return `${day} ${hours}:${min}`;
}

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
}

function search(event) {
  event.preventDefault();
  let apiKey = "54829ee7eb8bc5b21e052e1ccda974e9";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let h4 = document.querySelector("h4");
let current = new Date();
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

h4.innerHTML = formatDate(current);