//This doesn't work yet , /https://xkcd.com/10/info.0.json
var data = new XMLHttpRequest();
var url = "http://anyorigin.com/get?url=/https://xkcd.com/10/info.0.json&callback=?";
data.open('GET', url, "jsonp");
data.send(null);
data.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var res = JSON.parse(data.response);
		var joke = res.transcript;
		localStorage.setItem('joke', joke);
	}
}
