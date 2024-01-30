const apiKey = "d3252ea38e6372662adc9cd22803a017";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weather = document.querySelector(".weather");
const searchBox = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        weather.style.display = "none";   
        searchBox.value = "";
    }else{
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp+"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }else{
            weatherIcon.src = "mist/rain.png"
        }
        weather.style.display = "block";   
        document.querySelector(".error").style.display = "none";
        searchBox.value = "";
    }  
}
button.addEventListener("click",() => {
    checkWeather(searchBox.value);
})

