const apiKey = '5a8b1d9c36cbf523bc1a7cb6c9baa356';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  
const searchInput = document.getElementById('text-input');
const searchBtn = document.getElementById('search-btn');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
 const response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metric`);

 if(response.status == 404) {
  document.querySelector(".error").style.display = "block";
  document.querySelector(".weather").style.display = "none";
 }else{
  let data = await response.json();
 
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed}km/hr`;
 
  if(data.weather[0].main == "Clouds") {
   weatherIcon.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Clear") {
   weatherIcon.src = "images/clear.png";
  }
  else if(data.weather[0].main == "Drizzle") {
   weatherIcon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Rain") {
   weatherIcon.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Snow") {
   weatherIcon.src = "images/snow.png";
  }
  else if(data.weather[0].main == "Mist") {
   weatherIcon.src = "images/mist.png";
  }
 
  document.querySelector('.weather').style.display = "block";
 }
}

searchBtn.addEventListener('click', () => {
 checkWeather(searchInput.value.trim());
})




