function loadDict() {
	var dictInput = localStorage.getItem('dictInput');
	var dict = new XMLHttpRequest();
	dict.open("GET", "https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json", "jsonp");
	dict.send(null);
	dict.onreadystatechange = function() {
		var res = JSON.parse(dict.response);
		eval("var def = res." + dictInput.toUpperCase() + ";localStorage.setItem('def', def);");
		var dictTrigger = "true";
		localStorage.setItem('dictTrigger', dictTrigger);
	} 
}


