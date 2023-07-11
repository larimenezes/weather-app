/*const api = {
  key: "/api/v1/anl/synoptic/locale/:country?token=your-app-token"
  base: "http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=your-app-token"

}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchBox.value);
    console.log(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date')
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;
  
  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday" "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getmonths()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}*/

const key = "28178d76fc0a9288d5eea106a9dad317"

function dataScreen(data) {
  
}


/*function clickbutton() {
  const input = document.querySelector(".search-box").value
}*/

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);



async function takeCity(searchBox) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBox}&appid=${key}`).then(response => response.json())
}

