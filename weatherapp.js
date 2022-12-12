const apiKey = "04a2685a728df314a8fcbba516bb4dd8";
let lat = "-37.906051731326805";
let lon = "145.18939071639662";

const apiCall = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKey+"&units=metric";

function fetchWeather() {
    fetch (apiCall)
    .then((response)=> response.json)
    .then((data)=> console.log(data));
}

fetchWeather();