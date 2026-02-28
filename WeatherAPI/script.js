const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".searchBox button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metric`);
    
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;  
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";   
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";   
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    const weatherMain = data.weather[0].main;
    if (weatherMain == "Clouds") weatherIcon.src = "Images/clouds.png";
    else if (weatherMain == "Clear") weatherIcon.src = "Images/clear.png";
    else if (weatherMain == "Snow") weatherIcon.src = "Images/snow.png";
    else if (weatherMain == "Drizzle") weatherIcon.src = "Images/drizzle.png";
    else if (weatherMain == "Mist") weatherIcon.src = "Images/mist.png";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});