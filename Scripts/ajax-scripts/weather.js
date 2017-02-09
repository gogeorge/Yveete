//Weather API https://www.wunderground.com/
var locationWeather = localStorage.getItem('locationWeather');
var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/58a1b29a6b2c67d6/conditions/q/" + locationWeather + ".json", false);
weather.send(null);

var r = JSON.parse(weather.response);

var dis = "Current location: " + r.current_observation.display_location.full + "  <p>";
var temp = r.current_observation.temperature_string+ "  <p>";

function getWeather(id,res) {
	document.getElementById(id).innerHTML=res;
}
getWeather("weather",dis);
getWeather("temp",temp);