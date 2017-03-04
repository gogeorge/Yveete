var newsSource = localStorage.getItem('newsSource');
var dataNews = new XMLHttpRequest();
		
if (newsSource != null) {
	dataNews.open("GET", "https://newsapi.org/v1/articles?source=" + newsSource + "&apiKey=3ff438724c194306928939eb66cb5bce", false);
}
else {
	dataNews.open("GET", " https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=3ff438724c194306928939eb66cb5bce", false);
}
dataNews.send(null);

var r = JSON.parse(dataNews.response);

var newsSpeech = r.articles[1].title + ", furthermore, " + r.articles[2].title;
var news = "<a href='" + r.articles[1].url + "' target='_blank' style='text-decoration:none;'>" + r.articles[1].title + "</a><br><br>" + r.articles[1].description +  " - by<em> " + r.articles[1].author + "</em>" +
		   "<br><br><a href='" + r.articles[2].url + "' target='_blank' style='text-decoration:none;'>" + r.articles[2].title + "</a><br><br>" + r.articles[2].description +  " - by<em> " + r.articles[2].author + "</em>";
var newsDisplay = document.getElementById("news_div").innerHTML = news;
localStorage.setItem('newsSpeech', newsSpeech);
localStorage.setItem('newsDisplay', newsDisplay);