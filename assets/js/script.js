var cities = [];

var cityFormEl=document.querySelector("#city-search-form");
var cityInputEl=document.querySelector("#city");
var weatherContainerEl=document.querySelector("#current-weather-container");
var citySearchInputEl = document.querySelector("#searched-city");
var forecastTitle = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("#fiveday-container");
var pastSearchButtonEl = document.querySelector("#past-search-buttons");

var formSubmitHandler =  function(event){
    event.preventDefault();
    var city = cityInputEl.value.trim();
    if(city){
        getCityWeather(city);
        get5Day(city);
        cities.unshift({city});
        cityInputEl.value="";s
    } else{
        alert("Please enter a valid city");
    }
    saveSearch();
    pastSearchButtonEl(city);
}
var saveSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));
};


var getCityWeather = function(city){
    var apiKey = "b830c88ffb45613b625dac08cd42841c"
    var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data, city);
        });
    });
};