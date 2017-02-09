//This doesn't work yet
var data = new XMLHttpRequest();
var url = "https://xkcd.com/10/info.0.json";
data.open('GET', url, "jsonp");
data.send(null);
data.onreadystatechange = function() {
	var res = JSON.parse(data.response);
	var joke = res.transcript;
	localStorage.setItem('joke', joke);
}
