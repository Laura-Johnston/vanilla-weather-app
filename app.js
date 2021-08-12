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

let city = 'crawley'
 let apiKey = "2b1f0fa7c28f6bcb8dbdce394c0c6b6d";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let cTemp = null;

 
 axios.get(apiUrl).then(displayTemp)

function displayTemp(response){
    console.log(response.data);
    console.log(response.data.main.temp);
    console.log(response.data.weather[0].description)
    console.log(response.data.main.humidity);
    console.log(response.data.wind.speed);
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

function changeToFarenheit(event){
    event.preventDefault();
    celsiusHref.classList.remove('active');
    fahrenheitHref.classList.add('active')
    let fTemp = (cTemp * 9) /5 + 32;
    let temp = document.querySelector('#temp');
    temp.innerHTML = Math.round(fTemp);
}
function changeToCelsius(event){
    event.preventDefault();
    celsiusHref.classList.add('active');
    fahrenheitHref.classList.remove('active')
    let temperature = document.querySelector('#temp');
    temperature.innerHTML = Math.round(cTemp);
}
let form = document.querySelector("#search-bar");
form.addEventListener("submit", citySearch);

let fahrenheitHref = document.querySelector('#farenheit-href');
fahrenheitHref.addEventListener('click', changeToFarenheit);


let celsiusHref = document.querySelector('#celsius-href');
celsiusHref.addEventListener('click', changeToCelsius);

