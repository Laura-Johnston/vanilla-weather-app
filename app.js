 //date and time
 let now = new Date();
console.log(now);

let date = now.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let currentDay = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let header = document.querySelector("#time");
header.innerHTML = `${currentDay}, ${hours}:${minutes}`;

function formatDay(time){
  let date = new Date(time * 1000);
  let day = date.getDay();
  let days = ['Sun','Mon','Tues','Wed','Thurs', 'Fri', 'Sat'];

  return days[day];
}

function getForecast(coords) {
//console.log(coords);
let apiKey = "2b1f0fa7c28f6bcb8dbdce394c0c6b6d";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayForecast);
}


function displayForecast(response) {
  let forecastResponse = response.data.daily;
  console.log(forecastResponse);
  let forecast = document.querySelector('#weather-forecast');
  let forecastHTML = "";
  let days =["Thur", "Fri", "Sat"];
forecastResponse.forEach(function(dayOfWeek, index) {
  if(index < 6 && index > 0) {
  forecastHTML = forecastHTML + `<div class ="row">` + `

        
        <div class="forecast-day-and-icon" id="five-day-forecast">
        <div class ="flex-items">
        <strong id="day-of-week" style ="font-size:15px;">${formatDay(dayOfWeek.dt)}</strong>
          <img src=
          'https://openweathermap.org/img/wn/${dayOfWeek.weather[0].icon}@2x.png'
        alt=""
        width="50">
    <div class="forecast-temps" style="display:inline-flex;">
        <span class="forecast-temp-max"><p style="font-size:15px;">
            ${Math.round(dayOfWeek.temp.max)}°  |  
        </p></span> 
        <span class="forecast-temp-min"><p style="font-size:15px;">
               ${Math.round(dayOfWeek.temp.min)}°
        </p></span>
      
    </div></div></div>
</div> </br>`
forecast.innerHTML = forecastHTML;
//console.log(forecastHTML)
}
;})
}


let city = 'crawley'
 let apiKey = "2b1f0fa7c28f6bcb8dbdce394c0c6b6d";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let cTemp = null;

 
 axios.get(apiUrl).then(displayTemp)

function displayTemp(response){
    //console.log(response.data);
    //console.log(response.data.main.temp);
    //console.log(response.data.weather[0].description)
    //console.log(response.data.main.humidity);
    //console.log(response.data.wind.speed);
    let city = document.querySelector('#city');
    city.innerHTML = response.data.name;
   let cityTemp = document.querySelector('#temp');
   cityTemp.innerHTML = Math.round(response.data.main.temp);
   let weatherDescription = document.querySelector('#weather-description');
   weatherDescription.innerHTML = response.data.weather[0].description;
   let wind = document.querySelector('#wind');
   wind.innerHTML= Math.round(response.data.wind.speed);
   let humidity = document.querySelector('#humidity');
   humidity.innerHTML = response.data.main.humidity;
    cTemp = response.data.main.temp;
   let weatherIcon = document.querySelector('#icon');
   weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    weatherIcon.setAttribute('alt', response.data.weather[0].description);

    getForecast(response.data.coord);
}


function search(city){
     let apiKey = "2b1f0fa7c28f6bcb8dbdce394c0c6b6d";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios(apiUrl).then(displayTemp);
 
}

search('Crawley');


function citySearch(event){
    event.preventDefault();
    let cityChoice = document.querySelector('#city-name');
    console.log(cityChoice.value)
    search(cityChoice.value);

}
  
let form = document.querySelector("#search-bar");
form.addEventListener("submit", citySearch);
