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

 let apiKey = "2b1f0fa7c28f6bcb8dbdce394c0c6b6d";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`;

 console.log(apiUrl);
 axios.get(apiUrl).then(displayTemp)

function displayTemp(response){
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
   
}

