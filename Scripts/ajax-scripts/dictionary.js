var dictInput = localStorage.getItem('dictInput');
var dict = new XMLHttpRequest();
dict.open("GET", "https://crossorigin.me/https://glosbe.com/gapi_v0_1/translate?from=pol&dest=eng&format=json&phrase=" + dictInput, "jsonp");
dict.send(null);
dict.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var r = JSON.parse(dict.response);
		var definition = r.tuc.meanings[1].text;
		localStorage.setItem('definition', definition);
		var dictTrigger = "true";
		localStorage.setItem('dictTrigger', dictTrigger);
	}
} 


