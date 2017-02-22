/* Declaring the 'input' variable. It is the TextField where the
   user types what he/she wants.
*/

var input = document.getElementById('inputText');
//when enter is pressed, obtainInput function (line: aprox. 11) will be triggered
input.onkeyup = obtainInput;
/* Declaring the 'output' variable. This the variable of the 
   <div id="dialog"></div>. Where the conversation is displayed.
*/
var output = document.getElementById('dialog');
input.focus();
//takes input from <input>	
function obtainInput(e) {
  // enter === 13. If anything other than enter is pressed return false.
  if (e.which != 13) {
    return false;
  }
  /* Here is the format of how the user's input and Yveete's answer will be displayed
	 With the use of inline CSS.
  */
  var question = this.value;
 displayOutput('<p style=\'margin-left:600px;font-size:18px;font-family:Helvetica;font-weight:lighter;\'><em>'
  + question + '</em></p>', output);
  displayOutput('<p style=\'position:relative;left: -150px;font-size:18px;font-family:Helvetica;font-weight:lighter;width:500px;text-align:left;\'>'
  + outputFormation(question) + '</p>', output);
  displayOutput('<hr style=\'opacity: 0.1;\'>', output);
  this.focus();
  this.select();
  
  /* scrollbar of the dialog div remains on the bottom
     so the user can see the latest interaction (user's input and then yveete's answer);
  */

  output.scrollTop = output.scrollHeight;
}
function outputFormation(question) {
  /* LocalStorage is useful for Yveete to remember various information */
  //localstorage list ////////////////////////////////////////////////////////////////////////////
  //emails and email names
  var emailName1 = localStorage.getItem('emailName1');
  var emailAddress1 = localStorage.getItem('emailAddress1');
  var emailName2 = localStorage.getItem('emailName2');
  var emailAddress2 = localStorage.getItem('emailAddress2');
  var emailName3 = localStorage.getItem('emailName3');
  var emailAddress3 = localStorage.getItem('emailAddress3');
  //random 
  var userName = localStorage.getItem('userName');
  var userAge = localStorage.getItem('userAge');
  var userAge2 = localStorage.getItem('userAge2');
  //localstorage from math calc for the workout
  var addFinal = localStorage.getItem('addFinal');
  var subtractFinal = localStorage.getItem('subtractFinal');
  var divideFinal = localStorage.getItem('divideFinal');
  var multiplyFinal = localStorage.getItem('multiplyFinal');
  var sphereAreaFinal = localStorage.getItem('sphereAreaFinal');
  var sphereVolumeFinal = localStorage.getItem('sphereVolumeFinal');
  var tanFinal = localStorage.getItem('tanFinal');
  var sinFinal = localStorage.getItem('sinFinal');
  var cosFinal = localStorage.getItem('cosFinal');
  var numPower = localStorage.getItem('numPower');
  var circumFinal = localStorage.getItem('circumFinal');
  var areaCircleFinal = localStorage.getItem('areaCircleFinal');
  var squareRootCalc = localStorage.getItem('squareRootCalc');
  var add1EquationFinal = localStorage.getItem('add1EquationFinal');
  var add2EquationFinal = localStorage.getItem('add2EquationFinal');
  var breakEvenFinal = localStorage.getItem('breakEvenFinal');
  var compoundInterestFinal = localStorage.getItem('compoundInterestFinal');
  //facetime
  var askFacetime1 = localStorage.getItem('askFacetime1');
  var askFacetime2 = localStorage.getItem('askFacetime2');
  var askFacetime3 = localStorage.getItem('askFacetime3');
  var askFacetime4 = localStorage.getItem('askFacetime4');
  var askFacetime5 = localStorage.getItem('askFacetime5');
  var facetime1 = localStorage.getItem('facetime1');
  var facetime2 = localStorage.getItem('facetime2');
  var facetime3 = localStorage.getItem('facetime3');
  var facetime4 = localStorage.getItem('facetime4');
  var facetime5 = localStorage.getItem('facetime5');
  //notes - changed titles
  var savedNote1 = localStorage.getItem('savedNote1');
  var changeTitle1 = localStorage.getItem('changeTitle1');
  var savedNote2 = localStorage.getItem('savedNote2');
  var changeTitle2 = localStorage.getItem('changeTitle2');
  var savedNote3 = localStorage.getItem('savedNote3');
  var changeTitle3 = localStorage.getItem('changeTitle3');
  //fb chat /names
  var askFbFriend = localStorage.getItem('askFbFriend');
  var askFbUrl = localStorage.getItem('askFbUrl');
  var askFbFriend2 = localStorage.getItem('askFbFriend2');
  var askFbUrl2 = localStorage.getItem('askFbUrl2');
  var askFbFriend3 = localStorage.getItem('askFbFriend3');
  var askFbUrl3 = localStorage.getItem('askFbUrl3');
  var askFbFriend4 = localStorage.getItem('askFbFriend4');
  var askFbUrl4 = localStorage.getItem('askFbUrl4');
  //places
  var place = localStorage.getItem('place');
  var flightFrom = localStorage.getItem('flightFrom');
  var flightTo = localStorage.getItem('flightTo');
  var hotelBookingPlace = localStorage.getItem('hotelBookingPlace');
  //reminders
  var textReminderMisc = localStorage.getItem('textReminderMisc');
  var textReminder1 = localStorage.getItem('textReminder1');
  var textReminder2 = localStorage.getItem('textReminder2');
  var textReminder5 = localStorage.getItem('textReminder5');
  var textReminder10 = localStorage.getItem('textReminder10');
  var textReminder15 = localStorage.getItem('textReminder15');
  var textReminder20 = localStorage.getItem('textReminder20');
  var textReminder25 = localStorage.getItem('textReminder25');
  var textReminder30 = localStorage.getItem('textReminder30');
  var textReminder35 = localStorage.getItem('textReminder35');
  var textReminder40 = localStorage.getItem('textReminder40');
  var textReminder45 = localStorage.getItem('textReminder45');
  var textReminder50 = localStorage.getItem('textReminder50');
  var textReminder55 = localStorage.getItem('textReminder55');
  var textReminder60 = localStorage.getItem('textReminder60');
  var dateMisc = localStorage.getItem('dateMisc');
  var date1 = localStorage.getItem('date1');
  var date2 = localStorage.getItem('date2');
  var date5 = localStorage.getItem('date5');
  var date10 = localStorage.getItem('date10');
  var date15 = localStorage.getItem('date15');
  var date20 = localStorage.getItem('date20');
  var date25 = localStorage.getItem('date25');
  var date30 = localStorage.getItem('date30');
  var date35 = localStorage.getItem('date35');
  var date40 = localStorage.getItem('date40');
  var date45 = localStorage.getItem('date45');
  var date50 = localStorage.getItem('date50');
  var date55 = localStorage.getItem('date55');
  var date60 = localStorage.getItem('date60');
  var dateMiscOff = localStorage.getItem('dateMiscOff');
  var date1off = localStorage.getItem('date1off');
  var date2off = localStorage.getItem('date2off');
  var date5off = localStorage.getItem('date5off');
  var date10off = localStorage.getItem('date10off');
  var date15off = localStorage.getItem('date15off');
  var date20off = localStorage.getItem('date20off');
  var date25off = localStorage.getItem('date25off');
  var date30off = localStorage.getItem('date30off');
  var date35off = localStorage.getItem('date35off');
  var date40off = localStorage.getItem('date40off');
  var date45off = localStorage.getItem('date45off');
  var date50off = localStorage.getItem('date50off');
  var date55off = localStorage.getItem('date55off');
  var date60off = localStorage.getItem('date60off');
  //triggers and other variables
  var ntErased = localStorage.getItem('ntErased');
  var fineTrigger = localStorage.getItem('fineTrigger');
  var editorTrigger = localStorage.getItem('editorTrigger');
  var deleteScript = localStorage.getItem('deleteScript');
  var addedScript = localStorage.getItem('addedScript');
  var editorValue = localStorage.getItem('editorValue');
  var addedScriptNotJS = localStorage.getItem('addedScriptNotJS');
  var runScript = localStorage.getItem('runScript');
  var newsDisplay = localStorage.getItem('newsDisplay');
  var newsSpeech = localStorage.getItem('newsSpeech');
  var newsSource = localStorage.getItem('newsSource');
  var debugTrigger = localStorage.getItem('debugTrigger');
  var noDebugTrigger = localStorage.getItem('noDebugTrigger');
  var addedScriptSC = localStorage.getItem('addedScriptSC');
  var debugSCTrigger = localStorage.getItem('debugSCTrigger');
  var def = localStorage.getItem('def');
  //customizations
  var darkModeHeader = localStorage.getItem('darkModeHeader');
  var darkModeBackground = localStorage.getItem('darkModeBackground');

  var canvasChart = document.getElementById('mycanvas');
  var canvasBtn = document.getElementById('canvasBtn');
  var canvasWhite = document.getElementById('whiteCanvas');

  /* If the user types something that doesn't match the script but matches 
	'how to' or 'what to do' then Yveete will take the user's input and google it
  */

  if (question.substring(0, 6).toUpperCase() == 'HOW TO' || question.substring(0, 10).toUpperCase() == 'WHAT TO DO') {
    window.open('https://www.google.com/search?q=' + question);
    answer = 'I didn\'t understand what you said so I searched it on the web. You can try teaching me so what you want can work next time.';
  }
  /*  If the user types something that doesn't match the script AND Yveete
	  KNOWS the user's name then this is the answer:
  */

  if (userName != null) {
    var answer = 'I am afraid I cannot answer this question,' + ' ' + userName;
  } 
  // else if the user never told Yveete his/her name then this is the answer:
  else {
    var answer = 'I am afraid I cannot answer this question';
  }  

  /////////////////////////////// CONTENTS ///////////////////////////////

  /* Content of the rest of the script:
		
		Script:
			- General Conversations : "hey, whats up, my name is george etc."
			- Searches: anything related to searching google, youtube etc.
			- Tools: Anything related to productivity.
			- Maths: Simple math like addition as well as trigonometry
			- Learning: Any code related to the user teaching Yveete
			- R&D: Anything that is not-fully functional, ideas or code that
			    i'm not sure about.

  */

  //////////////////////////////////////////////////////////////////////////////
  /* Yveete - GENERAL CONVERSATIONS */
  //////////////////////////////////////////////////////////////////////////////

  /* For future reference, an 'interaction' is when a user types something and Yveete will answer 
	 For example :
	 	User => hey
	 	Yveete => Hello

	 	This was one interaction
  */
  //This interaction is incase the user presses enter to the initial value of the input
  if (question == 'Talk to Yveete') {
    var msg = new SpeechSynthesisUtterance('Please ask me something');
    window.speechSynthesis.speak(msg);
    answer = 'Please ask me something';
  }
  if (question.toUpperCase() == 'HELLO' || question.toUpperCase() == 'HEY' || question.toUpperCase()
  == 'HI' || question.toUpperCase() == 'HELLO YVEETE') {
    if (userName == null) {
      var msg = new SpeechSynthesisUtterance('Hello');
      window.speechSynthesis.speak(msg);
      answer = 'Hello';
    } 
    else {
      var msg = new SpeechSynthesisUtterance('Hello ' + userName);
      window.speechSynthesis.speak(msg);
      answer = 'Hello ' + userName;
    }
  }
  if (question.toUpperCase() == 'WHAT IS YOUR NAME' || question.toUpperCase() == 'WHATS YOUR NAME') {
    var msg = new SpeechSynthesisUtterance('My name is Yveete');
    window.speechSynthesis.speak(msg);
    answer = 'My name is Yveete';
  }
  if (question.toUpperCase() == 'HOW OLD ARE YOU' || question.toUpperCase() == 'WHAT IS YOUR AGE' || question.toUpperCase() == 'WHATS YOUR AGE') {
    var msg = new SpeechSynthesisUtterance('I don\'t know, ask my developer George');
    window.speechSynthesis.speak(msg);
    answer = 'I don\'t know, ask my developer, George';
  }
  if (question.toUpperCase() == 'WHATS UP' || question.toUpperCase() == 'HOW ARE YOU' || question.toUpperCase() == 'HOW IS LIFE') {
    var fineTrigger = 'true';
    localStorage.setItem('fineTrigger', fineTrigger);
    var msg = new SpeechSynthesisUtterance('Fine, what about you?');
    window.speechSynthesis.speak(msg);
    answer = 'fine, what about you?';
  }
  if (question.toUpperCase() == 'HOWS LIFE' || question.toUpperCase() == 'HOW IS LIFE' || question.toUpperCase() == 'HOW ARE YOU FEELING') {
    var fineTrigger = 'true';
    localStorage.setItem('fineTrigger', fineTrigger);
    if (userName != null) {
      var msg = new SpeechSynthesisUtterance('It is pretty good' + ' ' + userName);
      window.speechSynthesis.speak(msg);
      answer = 'It is pretty good ' + userName;
    } 
    else {
      var msg1 = new SpeechSynthesisUtterance('It is pretty good');
      window.speechSynthesis.speak(msg1);
      answer = 'It is pretty good';
    }
  }
  if (question.match('.*\\bfine\\b.*') || question.match('.*\\bgood\\b.*') || question.match('.*\\bwell\\b.*')) {
    if (fineTrigger == 'true') {
      var msg1 = new SpeechSynthesisUtterance('That is great!');
      window.speechSynthesis.speak(msg1);
      answer = 'That is great!';
      localStorage.removeItem('fineTrigger');
    } 
    else if (question.substring(0, 4).toUpperCase() == 'FINE' || question.substring(0, 4).toUpperCase() == 'WELL' || question.substring(0, 4).toUpperCase() == 'GOOD') {
      var unclearString = question.substring(0, 4);
      var msg2 = new SpeechSynthesisUtterance('I don\'t know who, or what is, ' + unclearString);
      window.speechSynthesis.speak(msg2);
      answer = 'Who or what is ' + unclearString;
    } 
    else {
      var msg1 = new SpeechSynthesisUtterance('Ok, Good to know');
      window.speechSynthesis.speak(msg1);
      answer = 'Ok ... Good to know';
    }
  }
  if (question.match('.*\\bmy name is\\b.*')) {
    var userName = question.substring(11);
    if (userName.match(/[0-9]/i)) {
      var msg1 = new SpeechSynthesisUtterance('Please type your name in letters only');
      window.speechSynthesis.speak(msg1);
      answer = 'Please type your name in letters only';
    } 
    else if ((userName != null) && (userName.match(/[a-z]/i))) {
      var msg2 = new SpeechSynthesisUtterance('I will remember your name as ' + userName);
      window.speechSynthesis.speak(msg2);
      localStorage.setItem('userName', userName);
      answer = 'I will remember you as ' + userName;
    } 
    else {
      var errorQ_my_name_is = prompt('\nThere has been an error.\nDo you want to send an email with this error to the developer,\nYou will just have to press \'enter\' to send it.', 'type \'yes\' or \'no\'');
      if (errorQ_my_name_is == 'yes') {
        window.open('mailto:george.valtas.isb@gmail.com?subject=errorQ_my_name_is&body=' + 'variables: ' + userName);
        answer = 'Thanks for helping!, my developer will message you shortly';
      } 
      else if (errorQ_my_name_is == 'no') {
        answer = 'Alright, email was not sent';
      } 
      else {
        answer = 'email was not sent';
      }
    }
  }
  if (question.toUpperCase() == 'WHAT IS MY NAME' || question.toUpperCase() == 'WHATS MY NAME' || question.toUpperCase() == 'DO YOU KNOW MY NAME' || question.toUpperCase() == 'WHAT\'S MY NAME') {
    if (userName != null) {
      var msg = new SpeechSynthesisUtterance('Your name is' + ' ' + userName);
      window.speechSynthesis.speak(msg);
      answer = 'Your name is' + ' ' + userName;
    } 
    else if (userName == null) {
      var msg1 = new SpeechSynthesisUtterance('I don\'t know your name');
      window.speechSynthesis.speak(msg1);
      answer = 'I do not know your name, if you want to tell it to me type \'remember my name\'';
    }
  }  
  //user types: i am <age> years old
  if ((question.match('.*\\bi am \\b.*')) && (question.match('.*\\b years old\\b.*'))) {
    var userAge2 = question.substring(6, 7);
    localStorage.setItem('userAge2', userAge2);
    if ((userAge2 != null) && (userAge2.match(/[0-9]/i))) {
      var msg2 = new SpeechSynthesisUtterance('I will remember your age from now on');
      window.speechSynthesis.speak(msg2);
      answer = 'I will remember your age from now on';
    } 
    else if (userAge2.match(/[a-z]/i)) {
      var msg2 = new SpeechSynthesisUtterance('Your age should be written only in numbers');
      window.speechSynthesis.speak(msg2);
      localStorage.removeItem('userAge');
      answer = 'Your age should be written only in numbers';
    } 
    else if (userAge2 == null) {
      var msg2 = new SpeechSynthesisUtterance('You didn\'t type your age');
      window.speechSynthesis.speak(msg2);
      answer = 'You didn\'t type your age';
    }
  }
  if (question.match('.*\\bmy age is\\b.*')) {
    var userAge = question.substring(10);
    localStorage.setItem('userAge', userAge);
    if ((userAge != null) && (userAge.match(/[0-9]/i))) {
      var msg2 = new SpeechSynthesisUtterance('I will remember your age from now on');
      window.speechSynthesis.speak(msg2);
      answer = 'I will remember your age from now on';
    } 
    else if (userAge.match(/[a-z]/i)) {
      var msg2 = new SpeechSynthesisUtterance('Your age should be written only in numbers');
      window.speechSynthesis.speak(msg2);
      localStorage.removeItem('userAge');
      answer = 'Your age should be written only in numbers';
    } 
    else if (userAge == null) {
      var msg2 = new SpeechSynthesisUtterance('You didn\'t type your age');
      window.speechSynthesis.speak(msg2);
      answer = 'You didn\'t type your age';
    }
  }
  if (question.toUpperCase() == 'WHAT IS MY AGE' || question.toUpperCase() == 'WHATS MY AGE' || question.toUpperCase() == 'HOW OLD AM I' || question.toUpperCase() == 'WHAT\'S MY AGE') {
    if (userAge != null) {
      var msg = new SpeechSynthesisUtterance('You are' + ' ' + userAge + ' ' + 'years old');
      window.speechSynthesis.speak(msg);
      answer = 'You are' + ' ' + userAge + ' ' + 'years old';
    } 
    else if (userAge == null) {
      var msg = new SpeechSynthesisUtterance('You never told me your age');
      window.speechSynthesis.speak(msg);
      answer = 'You never told me your age';
    }
  }
  if (question.toUpperCase() == 'THANKS' || question.toUpperCase() == 'THANK YOU' || question.toUpperCase() == 'THNX') {
    var msg = new SpeechSynthesisUtterance('Your welcome');
    window.speechSynthesis.speak(msg);
    answer = 'Your welcome';
  }
  if (question.toUpperCase() == 'BYE' || question.toUpperCase() == 'GOODBYE' || question.toUpperCase() == 'BYE BYE' || question.toUpperCase() == 'SEE YA' || question.toUpperCase() == 'GOODNIGHT') {
    if (userName != null) {
      var msg = new SpeechSynthesisUtterance('Goodbye ' + userName);
      window.speechSynthesis.speak(msg);
      answer = 'Goodbye ' + userName;
    } 
    else {
      var msg = new SpeechSynthesisUtterance('Goodbye');
      window.speechSynthesis.speak(msg);
      answer = 'Goodbye';
    }
  }
  if (question.toUpperCase() == 'ARE YOU GOOD' || question.toUpperCase() == 'ARE YOU WELL') {
    var msg = new SpeechSynthesisUtterance('Yes, don\'t worry about me');
    window.speechSynthesis.speak(msg);
    answer = 'Yes, don\'t worry about me';
  }
  if (question.toUpperCase() == 'HOW WAS YOUR DAY') {
    var msg = new SpeechSynthesisUtterance('It was good');
    window.speechSynthesis.speak(msg);
    answer = 'It was good';
  }  

  //////////////////////////////////////////////////////////////////////////////
  /* Yveete - SEARCH */
  //////////////////////////////////////////////////////////////////////////////

  //searching a place on google maps
  if (question.match('.*\\bwhere is\\b.*')) {
    var place = question.substring(8);
    localStorage.setItem('place', place);
    if (place != null) {
      window.open('https://www.google.ro/maps/place/' + place);
      var msg1 = new SpeechSynthesisUtterance('I found ' + place + ' on google maps');
      window.speechSynthesis.speak(msg1);
      answer = 'I found ' + place + ' on google maps';
    }
  }
  if (question.match('.*\\bsearch\\b.*')) {
    var searchg = question.substring(6);
    if (searchg != null) {
      window.open('https://www.google.com/search?q=' + searchg);
      answer = 'Google has opened in a new window';
    }
  }
  if (question.match('.*\\byt\\b.*')) {
    var searchy = question.substring(4);
    if (searchy != null) {
      window.open('https://www.youtube.com/results?search_query=' + searchy);
      answer = 'Your Youtube search has opened in a new window';
    }
  }
  if (question.match('.*\\bdefine\\b.*')) {
    var define = question.substring(8);
    if (define != null) {
      window.open('https://www.google.com/search?q=define%20' + define);
      answer = 'The definition of the word you were looking for has been opened on a new window';
    }
  }
  if (question.match('.*\\bsynonym\\b.*')) {
    var synonym = question.substring(9);
    if (synonym != null) {
      window.open('https://www.google.com/search?q=synonym%20' + synonym);
      answer = 'All of the synonyms of the word you were looking for have been opened on a new window';
    }
  }  

 //////////////////////////////////////////////////////////////////////////////
  /* Yveete - TOOLS */
  //////////////////////////////////////////////////////////////////////////////

  if (question.toUpperCase() == 'WHATS THE TIME' || question.toUpperCase() == 'WHAT IS THE TIME' || question.toUpperCase() == 'TELL THE TIME' || question.toUpperCase() == 'TELL ME THE TIME') {
    var date = new Date();
    var msg = new SpeechSynthesisUtterance('The time is ' + date.getHours() +
    ':' + date.getMinutes());
    window.speechSynthesis.speak(msg);
    answer = 'The time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }  
  //This interaction will remain a comment until i finish 
  //something similar but better in the R&D sections
  /*
					if (question.match(".*\\bweather\\b.*")) {
						var weather = question.substring(8);
						if (weather != null) {
							window.open('https://www.google.com/search?q=weather%20' + weather);
							answer = "Weather has opened on another tab";
						}
						if (weather == null) {
							window.open('https://www.google.com/search?q=weather%20');
							answer = "Weather has opened on another tab";
						}
					}
	*/

  //When user types 'save email as <person's name of the email>' this is what happens:
  if (question.match('.*\\bsave email as\\b.*')) {
    var emailtrigger = 'true';
    localStorage.setItem('emailtrigger', emailtrigger);
    var emailNameTemp = question.substring(14);
    localStorage.setItem('emailNameTemp', emailNameTemp);
    if ((emailNameTemp != null) && (emailName1 == null)) {
      var emailAddress1 = prompt('\nType ' + emailNameTemp + '\'s email address');
      localStorage.setItem('emailAddress1', emailAddress1);
      var emailName1 = emailNameTemp;
      localStorage.setItem('emailName1', emailName1);
      var msg = new SpeechSynthesisUtterance('Your email has been saved');
      window.speechSynthesis.speak(msg);
      answer = emailAddress1 + ' has been saved as ' + emailName1 + ' in the email contacts';
    } 
    else if ((emailNameTemp != null) && (emailName1 != null) && (emailName2 == null)) {
      var emailAddress2 = prompt('\nType ' + emailNameTemp + '\'s email address');
      localStorage.setItem('emailAddress2', emailAddress2);
      var emailName2 = emailNameTemp;
      localStorage.setItem('emailName2', emailName2);
      var msg = new SpeechSynthesisUtterance('Your email has been saved');
      window.speechSynthesis.speak(msg);
      answer = emailAddress2 + ' has been saved as ' + emailName2 + ' in the email contacts';
    } 
    else if ((emailNameTemp != null) && (emailName1 != null) && (emailName2 != null) && (emailName3 == null)) {
      var emailAddress3 = prompt('\nType ' + emailNameTemp + '\'s email address');
      localStorage.setItem('emailAddress3', emailAddress3);
      var emailName3 = emailNameTemp;
      localStorage.setItem('emailName3', emailName3);
      var msg = new SpeechSynthesisUtterance('Your email has been saved');
      window.speechSynthesis.speak(msg);
      answer = emailAddress3 + ' has been saved as ' + emailName3 + ' in the email contacts';
    } 
    else if ((emailNameTemp != null) && (emailName1 != null) && (emailName2 != null) && (emailName3 != null)) {
      var msg = new SpeechSynthesisUtterance('Your email slots are full');
      window.speechSynthesis.speak(msg);
      answer = 'Your email slots are full';
    } 
    else if (emailNameTemp == null) {
      var msg = new SpeechSynthesisUtterance('You did not type a name');
      window.speechSynthesis.speak(msg);
      answer = 'You did not type a name';
    } 
    else {
      answer = 'Something went wrong';
    }
  }

  if (question.toUpperCase() == 'SHOW ALL EMAILS' || question.toUpperCase() == 'SHOW ME ALL EMAILS' || question.toUpperCase() == 'SHOW ALL EMAIL ADDRESSES' || question.toUpperCase() == 'SHOW ME ALL EMAIL ADDRESSES' || question.toUpperCase() == 'SHOW ME ALL SAVED EMAILS' || question.toUpperCase() == 'SHOW ALL SAVED EMAIL ADDRESSES' || question.toUpperCase() == 'SHOW ALL SAVED EMAILS' || question.toUpperCase() == 'SHOW ALL SAVED EMAIL ADRESSES' || question.toUpperCase() == 'SHOW EMAIL ADDRESSES' || question.toUpperCase() == 'SHOW EMAILS' || question.toUpperCase() == 'SHOW EMAIL CONTACTS') {
    var emailErased = localStorage.getItem('emailErased');
    var emailtrigger = localStorage.getItem('emailtrigger');
    if (emailErased == 'true') {
      if (emailtrigger == 'true') {
        emailErased = null;
        var msg = new SpeechSynthesisUtterance('Sure, here are the emails that you have saved');
        window.speechSynthesis.speak(msg);
        answer = 'Sure, here are the emails that you have saved:<br/><br/>' + '<u>' + 'SAVED EMAILS' +
        '</u>' + '<br/><br/>';
        if ((emailName1 != null) && (emailAddress1 != null)) {
          answer += '<em>' + emailName1 + '</em> : ' + emailAddress1 + ' ' +
          '<a href=\'' + 'mailto:' + emailAddress1 + '?\' target=\'_blank\'>Email Now</a><br/><br/>';
        }
        if ((emailName2 != null) && (emailAddress2 != null)) {
          answer += '<em>' + emailName2 + '</em> : ' + emailAddress2 + ' ' +
          '<a href=\'' + 'mailto:' + emailAddress2 + '?\' target=\'_blank\'>Email Now</a><br/><br/>';
        }
        if ((emailName3 != null) && (emailAddress3 != null)) {
          answer += '<em>' + emailName3 + '</em> : ' + emailAddress3 + ' ' +
          '<a href=\'' + 'mailto:' + emailAddress3 + '?\' target=\'_blank\'>Email Now</a>';
        }
      } 
      else {
        var msg = new SpeechSynthesisUtterance('Your emails have been deleted');
        window.speechSynthesis.speak(msg);
        answer = 'Your emails have been deleted';
      }
    } 
    else if (emailtrigger == 'true') {
      if ((emailName1 == null) && (emailName2 == null) && (emailName3 == null)) {
        var msg = new SpeechSynthesisUtterance('You don\'t have any emails');
        window.speechSynthesis.speak(msg);
        answer = 'You don\'t have any emails at the moment';
      } 
      else {
        var msg = new SpeechSynthesisUtterance('Sure, here are the emails that you have saved');
        window.speechSynthesis.speak(msg);
        answer = 'Sure, here are the emails that you have saved:<br/><br/>' + '<u>' + 'SAVED EMAILS' +
        '</u>' + '<br/><br/>';
        if ((emailName1 != null) && (emailAddress1 != null)) {
          answer += '<em>' + emailName1 + '</em> : ' + emailAddress1 + ' ' +
          '<a href=\'' + 'mailto:' + emailAddress1 + '?\' target=\'_blank\'>Email Now</a><br/><br/>';
        }
        if ((emailName2 != null) && (emailAddress2 != null)) {
          answer += '<em>' + emailName2 + '</em> : ' + emailAddress2 + ' ' +
          '<a href=\'' + 'mailto:' + emailAddress2 + '?\' target=\'_blank\'>Email Now</a><br/><br/>';
        }
        if ((emailName3 != null) && (emailAddress3 != null)) {
          answer += '<em>' + emailName3 + '</em> : ' + emailAddress3 + ' ' +
          '<a href=\'' + 'mailto:' + emailAddress3 + '?\' target=\'_blank\'>Email Now</a>';
        }
      }
    } 
    else {
      var msg = new SpeechSynthesisUtterance('You don\'t have any emails');
      window.speechSynthesis.speak(msg);
      answer = 'You don\'t have any emails';
    }
  }
  if (question.toUpperCase() == 'DELETE EMAILS' || question.toUpperCase() == 'DELETE EMAIL LIST' || question.toUpperCase() == 'ERASE EMAILS') {
    var emailErased = 'true';
    localStorage.setItem('emailErased', emailErased);
    localStorage.removeItem('emailName1');
    localStorage.removeItem('emailAddress1');
    localStorage.removeItem('emailName2');
    localStorage.removeItem('emailAddress2');
    localStorage.removeItem('emailName3');
    localStorage.removeItem('emailAddress3');
    localStorage.removeItem('emailtrigger');
    var msg = new SpeechSynthesisUtterance('Your emails have been deleted');
    window.speechSynthesis.speak(msg);
    answer = 'Your emails have been deleted';
  }
  if (question.match('.*\\bdelete email\\b.*')) {
    var deletedEmail = question.substring(13);
    if (deletedEmail != null) {
      if ((deletedEmail == emailName1) || (deletedEmail == emailAddress1)) {
        localStorage.removeItem('emailAddress1');
        answer = 'The email with the name of ' + emailName1 + ' has been deleted';
        localStorage.removeItem('emailName1');
      }
      if ((deletedEmail == emailName2) || (deletedEmail == emailAddress2)) {
        localStorage.removeItem('emailAddress2');
        answer = 'The email with the name of ' + emailName2 + ' has been deleted';
        localStorage.removeItem('emailName2');
      }
      if ((deletedEmail == emailName3) || (deletedEmail == emailAddress3)) {
        localStorage.removeItem('emailAddress3');
        answer = 'The email with the name of ' + emailName3 + ' has been deleted';
        localStorage.removeItem('emailName3');
      }
    }
  }
  /* 
    Reminders.
    Here you will see that I save many variables that include the time.
    This is because they will be handy when the user types 'show reminders'
    because then it will show all the reminders and when they are going to go off
    or before how much time did they go off.
  */
  if (question.toUpperCase() == 'CREATE REMINDER' || question.toUpperCase() == 'SET REMINDER') {
    var timeReminder = prompt('\nWhen should I alert you?', 'Type here');
    localStorage.setItem('timeReminder', timeReminder);
    if (timeReminder == '1' || timeReminder.toUpperCase() == '1 MINUTE' || timeReminder.toUpperCase() == '1 MIN') {
      var textReminder1 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder1', textReminder1);
      var time = new Date();
      var date1 = time.getHours();
      + ':' + time.getMinutes();
      localStorage.setItem('date1', date1);
      answer = 'Your reminder has been set, I will alert you in 1 minute';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('1 minute reminder,' + textReminder1);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 1 minute ago\n\n ' + textReminder1);
        localStorage.removeItem('date1');
        var time = new Date();
        var date1off = time.getHours();
        + time.getMinutes();
        localStorage.setItem('date1off', date1off);
      }, 60000);
    } 
    else if (timeReminder == '2' || timeReminder.toUpperCase() == '2 MINUTES' || timeReminder.toUpperCase() == '2 MIN') {
      var textReminder2 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder2', textReminder2);
      var time = new Date();
      var date2 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date2', date2);
      answer = 'Your reminder has been set, I will alert you in 2 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('2 minutes reminder,' + textReminder2);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 2 minutes ago\n\n ' + textReminder2);
        localStorage.removeItem('date2');
        var time = new Date();
        var date2off = time.getHours();
        + time.getMinutes();
        localStorage.setItem('date2off', date2off);
      }, 120000);
    } 
    else if (timeReminder == '5' || timeReminder.toUpperCase() == '5 MINUTES' || timeReminder.toUpperCase() == '5 MIN') {
      var textReminder5 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder5', textReminder5);
      var time = new Date();
      var date5 = time.getHours();
      + ':' + time.getMinutes();
      localStorage.setItem('date5', date5);
      answer = 'Your reminder has been set, I will alert you in 5 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('5 minutes reminder,' + textReminder5);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 5 minutes ago\n\n ' + textReminder5);
        localStorage.removeItem('date5');
        var time = new Date();
        var date5off = time.getHours();
        + time.getMinutes();
        localStorage.setItem('date5off', date5off);
      }, 300000);
    } 
    else if (timeReminder == '10' || timeReminder.toUpperCase() == '10 MINUTES' || timeReminder.toUpperCase() == '10 MIN') {
      var textReminder10 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder10', textReminder10);
      var time = new Date();
      var date10 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date10', date10);
      answer = 'Your reminder has been set, I will alert you in 10 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('10 minutes reminder,' + textReminder);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 10 minutes ago\n\n ' + textReminder10);
        localStorage.removeItem('date10');
        var time = new Date();
        var date10off = time.getHours() + time.getMinutes();
        localStorage.setItem('date10off', date10off);
      }, 600000);
    } 
    else if (timeReminder == '15' || timeReminder.toUpperCase() == '15 MINUTES' || timeReminder.toUpperCase() == '15 MIN') {
      var textReminder15 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder15', textReminder15);
      var time = new Date();
      var date15 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date15', date15);
      answer = 'Your reminder has been set, I will alert you in 15 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('15 minutes reminder,' + textReminder15);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 15 minutes ago\n\n ' + textReminder15);
        localStorage.removeItem('date15');
        var time = new Date();
        var date15off = time.getHours() + time.getMinutes();
        localStorage.setItem('date15off', date15off);
      }, 900000);
    } 
    else if (timeReminder == '20' || timeReminder.toUpperCase() == '20 MINUTES' || timeReminder.toUpperCase() == '20 MIN') {
      var textReminder20 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder20', textReminder20);
      var time = new Date();
      var date20 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date20', date20);
      answer = 'Your reminder has been set, I will alert you in 20 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('20 minutes reminder,' + textReminder20);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 20 minutes ago\n\n ' + textReminder20);
        localStorage.removeItem('date20');
        var time = new Date();
        var date20off = time.getHours() + time.getMinutes();
        localStorage.setItem('date20off', date20off);
      }, 1200000);
    } 
    else if (timeReminder == '25' || timeReminder.toUpperCase() == '25 MINUTES' || timeReminder.toUpperCase() == '25 MIN') {
      var textReminder25 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder25', textReminder25);
      var time = new Date();
      var date25 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date25', date25);
      answer = 'Your reminder has been set, I will alert you in 25 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('25 minutes reminder,' + textReminder25);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 25 minutes ago\n\n ' + textReminder25);
        localStorage.removeItem('date25');
        var time = new Date();
        var date25off = time.getHours() + time.getMinutes();
        localStorage.setItem('date25off', date25off);
      }, 1500000);
    } 
    else if (timeReminder == '30' || timeReminder.toUpperCase() == '30 MINUTES' || timeReminder.toUpperCase() == 'HALF AN HOUR' || question.toUpperCase() == 'HALF HOUR' || timeReminder.toUpperCase() == '30 MIN') {
      var textReminder30 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder30', textReminder30);
      var time = new Date();
      var date30 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date30', date30);
      answer = 'Your reminder has been set, I will alert you in 30 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('30 minutes reminder,' + textReminder30);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 30 minutes ago\n\n ' + textReminder30);
        localStorage.removeItem('date30');
        var time = new Date();
        var date30off = time.getHours() + time.getMinutes();
        localStorage.setItem('date30off', date30off);
      }, 1800000);
    } 
    else if (timeReminder == '35' || timeReminder.toUpperCase() == '35 MINUTES' || timeReminder.toUpperCase() == '35 MIN') {
      var textReminder35 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder35', textReminder35);
      var time = new Date();
      var date35 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date35', date35);
      answer = 'Your reminder has been set, I will alert you in 35 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('35 minutes reminder,' + textReminder35);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 35 minutes ago\n\n ' + textReminder35);
        localStorage.removeItem('date35');
        var time = new Date();
        var date35off = time.getHours() + time.getMinutes();
        localStorage.setItem('date35off', date35off);
      }, 2100000);
    } 
    else if (timeReminder == '40' || timeReminder.toUpperCase() == '40 MINUTES' || timeReminder.toUpperCase() == '40 MIN') {
      var textReminder40 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder40', textReminder40);
      var time = new Date();
      var date40 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date40', date40);
      answer = 'Your reminder has been set, I will alert you in 40 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('40 minutes reminder,' + textReminder40);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 40 minutes ago\n\n ' + textReminder40);
        localStorage.removeItem('date40');
        var time = new Date();
        var date40off = time.getHours() + time.getMinutes();
        localStorage.setItem('date40off', date40off);
      }, 2400000);
    } 
    else if (timeReminder == '45' || timeReminder.toUpperCase() == '45 MINUTES' || timeReminder.toUpperCase() == '45 MIN') {
      var textReminder45 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder45', textReminder45);
      var time = new Date();
      var date45 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date45', date45);
      answer = 'Your reminder has been set, I will alert you in 45 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('45 minutes reminder,' + textReminder45);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 45 minutes ago\n\n ' + textReminder45);
        localStorage.removeItem('date45');
        var time = new Date();
        var date45off = time.getHours() + time.getMinutes();
        localStorage.setItem('date45off', date45off);
      }, 2700000);
    } 
    else if (timeReminder == '50' || timeReminder.toUpperCase() == '50 MINUTES' || timeReminder.toUpperCase() == '50 MIN') {
      var textReminder50 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder50', textReminder50);
      var time = new Date();
      var date50 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date50', date50);
      answer = 'Your reminder has been set, I will alert you in 50 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('50 minutes reminder,' + textReminder50);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 50 minutes ago\n\n ' + textReminder50);
        localStorage.removeItem('date50');
        var time = new Date();
        var date50off = time.getHours() + time.getMinutes();
        localStorage.setItem('date50off', date50off);
      }, 3000000);
    } 
    else if (timeReminder == '55' || timeReminder.toUpperCase() == '55 MINUTES' || timeReminder.toUpperCase() == '55 MIN') {
      var textReminder55 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder55', textReminder55);
      var time = new Date();
      var date55 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date55', date55);
      answer = 'Your reminder has been set, I will alert you in 55 minutes';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('55 minutes reminder,' + textReminder55);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 55 minutes ago\n\n ' + textReminder55);
        localStorage.removeItem('date55');
        var time = new Date();
        var date55off = time.getHours() + time.getMinutes();
        localStorage.setItem('date55off', date55off);
      }, 3300000);
    } 
    else if (timeReminder == '60' || timeReminder.toUpperCase() == '60 MINUTES' || timeReminder.toUpperCase() == '1 HOUR' || timeReminder.toUpperCase() == '60 MIN') {
      var textReminder60 = prompt('\nWhat should the reminder say?', '');
      localStorage.setItem('textReminder60', textReminder60);
      var time = new Date();
      var date60 = time.getHours() + ':' + time.getMinutes();
      localStorage.setItem('date60', date60);
      answer = 'Your reminder has been set, I will alert you in 1 hour';
      setTimeout(function () {
        var msg1 = new SpeechSynthesisUtterance('60 minutes reminder,' + textReminder60);
        window.speechSynthesis.speak(msg1);
        alert('\nREMINDER : 1 hour ago\n\n ' + textReminder60);
        localStorage.removeItem('date60');
        var time = new Date();
        var date60off = time.getHours() + time.getMinutes();
        localStorage.setItem('date60off', date60off);
      }, 3600000);
    } 
    else if (timeReminder.match(/[0-9]/i)) {
      if ((timeReminder.match(/[0-9]/i)) && (timeReminder.match(/[a-z]/i))) {
        localStorage.removeItem('timeReminder');
        answer = 'something went wrong';
      } 
      else {
        var textReminderMisc = prompt('what should the reminder say');
        /* 
        
        if the user types 'send an email' at the reminder description then when the 
        reminder goes off gmail/outlook/apple mail will open. same for facetime and google docs.

        */
        if (textReminderMisc.match('.*\\bemail\\b.*')) {
          if (textReminderMisc.match('\\b' + emailName1)) {
            var exceptionEmailUser1 = timeReminder * 60000;
            var msg1 = new SpeechSynthesisUtterance('Your reminder has been set for ' + timeReminder + ' minutes');
            window.speechSynthesis.speak(msg1);
            answer = 'Your reminder has been set for ' + timeReminder + ' minutes';
            setTimeout(function () {
              alert('\nREMINDER : ' + timeReminder + ' minutes ago\n\n ' + textReminderMisc);
              window.open('mailto:' + emailAddress1);
            }, exceptionEmailUser1);
          } 
          else if (textReminderMisc.match('\\b' + emailName2)) {
            var exceptionEmailUser2 = timeReminder * 60000;
            var msg1 = new SpeechSynthesisUtterance('Your reminder has been set for ' + timeReminder + ' minutes');
            window.speechSynthesis.speak(msg1);
            answer = 'Your reminder has been set for ' + timeReminder + ' minutes';
            setTimeout(function () {
              alert('\nREMINDER : ' + timeReminder + ' minutes ago\n\n ' + textReminderMisc);
              window.open('mailto:' + emailAddress2);
            }, exceptionEmailUser2);
          } 
          else if (textReminderMisc.match('\\b' + emailName3)) {
            var exceptionEmailUser3 = timeReminder * 60000;
            var msg1 = new SpeechSynthesisUtterance('Your reminder has been set for ' + timeReminder + ' minutes');
            window.speechSynthesis.speak(msg1);
            answer = 'Your reminder has been set for ' + timeReminder + ' minutes';
            setTimeout(function () {
              alert('\nREMINDER : ' + timeReminder + ' minutes ago\n\n ' + textReminderMisc);
              window.open('mailto:' + emailAddress3);
            }, exceptionEmailUser3);
          } 
          else {
            var exceptionEmail2 = timeReminder * 60000;
            answer = 'Your reminder has been set for ' + timeReminder + ' minutes';
            setTimeout(function () {
              alert('\nREMINDER : ' + timeReminder + ' minutes ago\n\n ' + textReminderMisc);
              window.open('mailto:');
            }, exceptionEmail2);
          }
        } 
        else if (textReminderMisc.match('.*\\bgoogle doc\\b.*') || textReminderMisc.match('.*\\bgoogle docs\\b.*') || textReminderMisc.match('.*\\bessay\\b.*')) {
          var exceptionDoc = timeReminder * 60000;
          var msg1 = new SpeechSynthesisUtterance('Your reminder has been set for ' + timeReminder + ' minutes');
          window.speechSynthesis.speak(msg1);
          answer = 'Your reminder has been set for ' + timeReminder + ' minutes';
          setTimeout(function () {
            alert('\nREMINDER : ' + timeReminder + ' minutes ago\n\n ' + textReminderMisc);
            window.open('https://docs.google.com/document/create');
          }, exceptionDoc);
        } 
        else if (textReminderMisc.match('.*\\brestaurant\\b.*') || textReminderMisc.match('.*\\brestaurants\\b.*')) {
          var exceptionRes = timeReminder * 60000;
          var msg1 = new SpeechSynthesisUtterance('Your reminder has been set for ' + timeReminder + ' minutes');
          window.speechSynthesis.speak(msg1);
          answer = 'Your reminder has been set for ' + timeReminder + ' minutes';
          setTimeout(function () {
            window.open('https://www.google.ro/maps/search/restaurants+near+me');
            alert('\nREMINDER : ' + timeReminder + ' minutes ago\n\n ' + textReminderMisc);
          }, exceptionRes);
        } 
        else if (textReminderMisc.match('.*\\bfacetime\\b.*')) {
          var idFacetime = prompt('\nis there a specific email address, phone number, apple id?');
          if (idFacetime != null) {
            var exceptionFt = timeReminder * 60000;
            var msg1 = new SpeechSynthesisUtterance('Your reminder has been set for ' + timeReminder + ' minutes');
            window.speechSynthesis.speak(msg1);
            answer = 'Your reminder has been set for ' + timeReminder + ' minutes';
            setTimeout(function () {
              var msg1 = new SpeechSynthesisUtterance('Your reminder has been set for ' + timeReminder + ' minutes');
              window.speechSynthesis.speak(msg1);
              window.open('facetime://' + idFacetime);
              alert('\nREMINDER : ' + timeReminder + ' minutes ago\n\n ' + textReminderMisc);
            }, exceptionFt);
          } 
          else {
            var msg1 = new SpeechSynthesisUtterance('Something went wrong');
            window.speechSynthesis.speak(msg1);
            answer = 'Somethign went wrong';
          }
        } 
        else {
          localStorage.setItem('textReminderMisc', textReminderMisc);
          var time = new Date();
          var dateMisc = time.getHours() + ':' + time.getMinutes();
          localStorage.setItem('dateMisc', dateMisc);
          var exception = timeReminder * 60000;
          answer = 'Your reminder has been set for ' + timeReminder + ' minutes';
          setTimeout(function () {
            var msg1 = new SpeechSynthesisUtterance(timeReminder + 'minutes reminder,' + textReminderMisc);
            window.speechSynthesis.speak(msg1);
            alert('\nREMINDER : ' + timeReminder + ' minutes ago\n\n ' + textReminderMisc);
            localStorage.removeItem('dateMisc');
            var time = new Date();
            var dateMiscOff = time.getHours() + time.getMinutes();
            localStorage.setItem('dateMiscOff', dateMiscOff);
          }, exception);
        }
      }
    } 
    else if (timeReminder.match(/[a-z]/i)) {
      answer = 'type the time of the reminder in numbers only';
    } 
    else {
      /*
							var msg = new SpeechSynthesisUtterance('Something went wrong');
							window.speechSynthesis.speak(msg);
							localStorage.removeItem('timeReminder');
							answer = "Something went wrong";
							*/
      var errorQ_set_reminder = prompt('\nThere has been an error.\nDo you want to send an email with this error to the developer,\nYou will just have to press \'enter\' to send it.', 'type \'yes\' or \'no\'');
      if (errorQ_set_reminder == 'yes') {
        window.open('mailto:george.valtas.isb@gmail.com?subject=errorQ_set_reminder&body=' + 'variables: ' + timeReminder + ' ' + textReminderMisc + ' ' + timeReminder);
        answer = 'Thanks for helping!, my developer will message you shortly';
      } 
      else if (errorQ_set_reminder == 'no') {
        answer = 'Alright, email was not sent';
      } 
      else {
        answer = 'email was not sent';
      }
    }
  }  /*
					if (question.match(".*\\bset reminder\\b.*")) {
						var timeExc = question.substring(13);
						var textReminderExc = prompt('\nWhat should the reminder say?','');							
						answer = "Your reminder has been set, I will alert you in " + timeExc + " minutes";
						var exceptionExc = timeExc * 60000;	
						setTimeout(function() { 							
							var msg1 = new SpeechSynthesisUtterance(timeExc + ' minutes reminder,' + textReminderExc);
	    					window.speechSynthesis.speak(msg1);
							alert("\nREMINDER : " + timeExc + " minutes ago\n\n " + textReminderExc);
							localStorage.removeItem('date5');
							var time = new Date();
							var dateExcoff = time.getHours(); + time.getMinutes();								
							localStorage.setItem('dateExcoff', dateExcoff);
							}, exceptionExc);
						}
					*/

  if (question.toUpperCase() == 'SHOW REMINDERS' || question.toUpperCase() == 'SHOW ALL REMINDERS' || question.toUpperCase() == 'REMINDERS' || question.toUpperCase() == 'SHOW REMIJNDERS') {
    var timeReminder = localStorage.getItem('timeReminder');
    //reminder 1
    if ((date1 != null) && (textReminder1 != null)) {
      answer = '<b>1 minute reminder</b> ( <em>' + date1 + '</em> ) : ' + textReminder1;
    }
    if ((date1 == null) && (textReminder1 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult1 = dateNow - date1off;
      answer = '<b>1 minute reminder</b> ( <em>The alarm went off ' + dateResult1 + ' minutes ago</em> )';
    }
    if ((date1 == null) && (textReminder1 == null)) {
      answer += '';
    }    //reminder 2

    if ((date2 != null) && (textReminder2 != null)) {
      answer +=
      '<br/><b>2 minute reminder</b> ( <em>' + date2 + '</em> ) : ' + textReminder2;
    }
    if ((date2 == null) && (textReminder2 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult2 = dateNow - date2off;
      answer +=
      '<br/><b>2 minute reminder</b> ( <em>The alarm went off ' + dateResult2 + ' minutes ago</em> )';
    }
    if ((date2 == null) && (textReminder2 == null)) {
      answer += '';
    }    //reminder 5

    if ((date5 != null) && (textReminder5 != null)) {
      answer +=
      '<br/><b>5 minute reminder</b> ( <em>' + date5 + '</em> ) : ' + textReminder5;
    }
    if ((date5 == null) && (textReminder5 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult5 = dateNow - date5off;
      answer +=
      '<br/><b>5 minute reminder</b> ( <em>The alarm went off ' + dateResult5 + ' minutes ago</em> )';
    }
    if ((date5 == null) && (textReminder5 == null)) {
      answer += '';
    }    //reminder 10

    if ((date10 != null) && (textReminder10 != null)) {
      answer +=
      '<br/><b>10 minute reminder</b> ( <em>' + date10 + '</em> ) : ' + textReminder10;
    }
    if ((date10 == null) && (textReminder10 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult10 = dateNow - date10off;
      answer +=
      '<br/><b>10 minute reminder</b> ( <em>The alarm went off ' + dateResult10 + ' minutes ago</em> )';
    }
    if ((date10 == null) && (textReminder10 == null)) {
      answer += '';
    }    //reminder 15

    if ((date15 != null) && (textReminder15 != null)) {
      answer +=
      '<br/><b>15 minute reminder</b> ( <em>' + date15 + '</em> ) : ' + textReminder15;
    }
    if ((date15 == null) && (textReminder15 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult15 = dateNow - date15off;
      answer +=
      '<br/><b>15 minute reminder</b> ( <em>The alarm went off ' + dateResult15 + ' minutes ago</em> )';
    }
    if ((date15 == null) && (textReminder15 == null)) {
      answer += '';
    }    //reminder 20

    if ((date20 != null) && (textReminder20 != null)) {
      answer +=
      '<br/><b>20 minute reminder</b> ( <em>' + date20 + '</em> ) : ' + textReminder20;
    }
    if ((date20 == null) && (textReminder20 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult20 = dateNow - date20off;
      answer +=
      '<br/><b>20 minute reminder</b> ( <em>The alarm went off ' + dateResult20 + ' minutes ago</em> )';
    }
    if ((date20 == null) && (textReminder20 == null)) {
      answer += '';
    }    //reminder 25

    if ((date25 != null) && (textReminder25 != null)) {
      answer +=
      '<br/><b>25 minute reminder</b> ( <em>' + date25 + '</em> ) : ' + textReminder25;
    }
    if ((date25 == null) && (textReminder25 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult25 = dateNow - date25off;
      answer +=
      '<br/><b>25 minute reminder</b> ( <em>The alarm went off ' + dateResult25 + ' minutes ago</em> )';
    }
    if ((date25 == null) && (textReminder25 == null)) {
      answer += '';
    }    //reminder 30

    if ((date30 != null) && (textReminder30 != null)) {
      answer +=
      '<br/><b>30 minute reminder</b> ( <em>' + date30 + '</em> ) : ' + textReminder30;
    }
    if ((date30 == null) && (textReminder30 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult30 = dateNow - date30off;
      answer +=
      '<br/><b>30 minute reminder</b> ( <em>The alarm went off ' + dateResult30 + ' minutes ago</em> )';
    }
    if ((date30 == null) && (textReminder30 == null)) {
      answer += '';
    }    //reminder 35

    if ((date35 != null) && (textReminder35 != null)) {
      answer +=
      '<br/><b>35 minute reminder</b> ( <em>' + date35 + '</em> ) : ' + textReminder35;
    }
    if ((date35 == null) && (textReminder35 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult35 = dateNow - date35off;
      answer +=
      '<br/><b>35 minute reminder</b> ( <em>The alarm went off ' + dateResult35 + ' minutes ago</em> )';
    }
    if ((date35 == null) && (textReminder35 == null)) {
      answer += '';
    }    //reminder 40

    if ((date40 != null) && (textReminder40 != null)) {
      answer +=
      '<br/><b>40 minute reminder</b> ( <em>' + date40 + '</em> ) : ' + textReminder40;
    }
    if ((date40 == null) && (textReminder40 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult40 = dateNow - date40off;
      answer +=
      '<br/><b>40 minute reminder</b> ( <em>The alarm went off ' + dateResult40 + ' minutes ago</em> )';
    }
    if ((date40 == null) && (textReminder40 == null)) {
      answer += '';
    }    //reminder 50

    if ((date50 != null) && (textReminder50 != null)) {
      answer +=
      '<br/><b>50 minute reminder</b> ( <em>' + date50 + '</em> ) : ' + textReminder50;
    }
    if ((date50 == null) && (textReminder50 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult50 = dateNow - date50off;
      answer +=
      '<br/><b>50 minute reminder</b> ( <em>The alarm went off ' + dateResult50 + ' minutes ago</em> )';
    }
    if ((date50 == null) && (textReminder50 == null)) {
      answer += '';
    }    //reminder 55

    if ((date55 != null) && (textReminder55 != null)) {
      answer +=
      '<br/><b>55 minute reminder</b> ( <em>' + date55 + '</em> ) : ' + textReminder55;
    }
    if ((date55 == null) && (textReminder55 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult55 = dateNow - date55off;
      answer +=
      '<br/><b>55 minute reminder</b> ( <em>The alarm went off ' + dateResult55 + ' minutes ago</em> )';
    }
    if ((date55 == null) && (textReminder55 == null)) {
      answer += '';
    }    //reminder 60

    if ((date60 != null) && (textReminder60 != null)) {
      answer +=
      '<br/><b>60 minute reminder</b> ( <em>' + date60 + '</em> ) : ' + textReminder60;
    }
    if ((date60 == null) && (textReminder60 != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResult60 = dateNow - date60off;
      answer +=
      '<br/><b>60 minute reminder</b> ( <em>The alarm went off ' + dateResult60 + ' minutes ago</em> )';
    }
    if ((date60 == null) && (textReminder60 == null)) {
      answer += '';
    }    //reminder misc

    if ((dateMisc != null) && (textReminderMisc != null)) {
      answer +=
      '<br/><b>' + timeReminder + ' minute reminder</b> ( <em>' + dateMisc + '</em> ) : ' + textReminderMisc;
    }
    if ((dateMisc == null) && (textReminderMisc != null)) {
      var time = new Date();
      var dateNow = time.getHours() + time.getMinutes();
      var dateResultMisc = dateNow - dateMiscOff;
      answer +=
      '<br/><b>' + timeReminder + ' minute reminder</b> ( <em>The alarm went off ' + dateResultMisc + ' minutes ago</em> )';
    }
    if ((dateMisc == null) && (textReminderMisc == null)) {
      answer += '';
    }    //erase reminders

    if ((date1 == null) && (textReminder1 == null) && (date2 == null) && (textReminder2 == null) && (date5 == null) && (textReminder5 == null) && (date10 == null) && (textReminder10 == null) && (date15 == null) && (textReminder15 == null) && (date20 == null) && (textReminder20 == null) && (date25 == null) && (textReminder25 == null) && (date30 == null) && (textReminder30 == null) && (date35 == null) && (textReminder35 == null) && (date40 == null) && (textReminder40 == null) && (date45 == null) && (textReminder45 == null) && (date50 == null) && (textReminder50 == null) && (date55 == null) && (textReminder55 == null) && (date60 == null) && (textReminder60 == null) && (dateMisc == null) && (textReminderMisc == null)) {
      var erased = localStorage.getItem('erased');
      if (erased == 'true') {
        var msg = new SpeechSynthesisUtterance('Timed-out reminders have been erased');
        window.speechSynthesis.speak(msg);
        answer = 'Timed-out reminders have been erased';
      } 
      else {
        var msg = new SpeechSynthesisUtterance('there aren\'t any reminders');
        window.speechSynthesis.speak(msg);
        answer = 'There aren\'t any reminders';
      }
    }
  }
  if (question.toUpperCase() == 'ERASE REMINDERS' || question.toUpperCase() == 'DELETE REMINDERS') {
    localStorage.removeItem('date1');
    localStorage.removeItem('date2');
    localStorage.removeItem('date5');
    localStorage.removeItem('date10');
    localStorage.removeItem('date15');
    localStorage.removeItem('date20');
    localStorage.removeItem('date25');
    localStorage.removeItem('date30');
    localStorage.removeItem('date35');
    localStorage.removeItem('date40');
    localStorage.removeItem('date45');
    localStorage.removeItem('date50');
    localStorage.removeItem('date55');
    localStorage.removeItem('date60');
    localStorage.removeItem('dateMisc');
    localStorage.removeItem('textReminder1');
    localStorage.removeItem('textReminder2');
    localStorage.removeItem('textReminder5');
    localStorage.removeItem('textReminder10');
    localStorage.removeItem('textReminder15');
    localStorage.removeItem('textReminder20');
    localStorage.removeItem('textReminder25');
    localStorage.removeItem('textReminder30');
    localStorage.removeItem('textReminder35');
    localStorage.removeItem('textReminder40');
    localStorage.removeItem('textReminder45');
    localStorage.removeItem('textReminder50');
    localStorage.removeItem('textReminder55');
    localStorage.removeItem('textReminder60');
    localStorage.removeItem('textReminderMisc');
    var erased = 'true';
    localStorage.setItem('erased', erased);
    var msg = new SpeechSynthesisUtterance('You have recently deleted the reminders');
    window.speechSynthesis.speak(msg);
    answer = 'You have recently deleted the reminders';
  }
  if (question.toUpperCase() == 'SAVE THIS NOTE AS 1' || question.toUpperCase() == 'SAVE THIS NOTE AS NOTE 1') {
    var ntTrigger = 'true';
    localStorage.setItem('ntTrigger', ntTrigger);
    //var savedNote1 = prompt('\nType any information that you want to save', "Type here");
    var note1Trigger = 'true';
    localStorage.setItem('note1Trigger', note1Trigger);
    var hiddenInput = document.getElementById('hidden');
    var blur = document.getElementById('blur');
    blur.style.visibility = 'visible';
    hiddenInput.style.visibility = 'visible';
    /*
						var msg = new SpeechSynthesisUtterance('Your note has been saved as Note 1');
						window.speechSynthesis.speak(msg); 
						*/
    answer = 'Your note has been saved as \'Note 1\'';
  }
  if (question.match('.*\\bsave note as\\b.*')) {
    var noteTitleTemp = question.substring(13);
    if (noteTitleTemp != null) {
      if ((savedNote1 == null) && (changeTitle1 == null)) {
        var savedNote1 = prompt('\n Type the note here');
        var changeTitle1 = noteTitleTemp;
        localStorage.setItem('savedNote1', savedNote1);
        localStorage.setItem('changeTitle1', changeTitle1);
        var msg = new SpeechSynthesisUtterance('Your note has beeen saved');
        window.speechSynthesis.speak(msg);
        answer = 'Your note has been saved';
      } 
      else if ((savedNote2 == null) && (changeTitle2 == null)) {
        var savedNote2 = prompt('\n Type the note here');
        var changeTitle2 = noteTitleTemp;
        localStorage.setItem('savedNote2', savedNote2);
        localStorage.setItem('changeTitle2', changeTitle2);
        var msg = new SpeechSynthesisUtterance('Your note has beeen saved');
        window.speechSynthesis.speak(msg);
        answer = 'Your note has been saved';
      } 
      else if ((savedNote3 == null) && (changeTitle3 == null)) {
        var savedNote3 = prompt('\n Type the note here');
        var changeTitle3 = noteTitleTemp;
        localStorage.setItem('savedNote3', savedNote3);
        localStorage.setItem('changeTitle3', changeTitle3);
        var msg = new SpeechSynthesisUtterance('Your note has beeen saved');
        window.speechSynthesis.speak(msg);
        answer = 'Your note has been saved';
      } 
      else if ((savedNote1 != null) && (changeTitle1 != null) && (savedNote2 != null) && (changeTitle2 != null) && (savedNote3 != null) && (changeTitle3 != null)) {
        var msg = new SpeechSynthesisUtterance('Your slots are full');
        window.speechSynthesis.speak(msg);
        answer = 'Your slots are full';
      }
    } 
    else if (noteTitleTemp == null) {
      var msg = new SpeechSynthesisUtterance('You didn\'t type a title');
      window.speechSynthesis.speak(msg);
      answer = 'You didn\'t type a title';
    } 
    else {
      //may this needs a debugging report
      answer = 'Something went wrong';
    }
  }
  if (question.match('.*\\bdelete note\\b.*')) {
    var deletedNote = question.substring(12);
    if (deletedNote != null) {
      if ((deletedNote == savedNote1) || (deletedNote == changeTitle1)) {
        var msg = new SpeechSynthesisUtterance('Note with title: ' + changeTitle1 + ' has been deleted');
        window.speechSynthesis.speak(msg);
        answer = 'Note with title: ' + changeTitle1 + ' has been deleted';
        localStorage.removeItem('savedNote1');
        localStorage.removeItem('changeTitle1');
      }
      if ((deletedNote == savedNote2) || (deletedNote == changeTitle2)) {
        var msg = new SpeechSynthesisUtterance('Note with title: ' + changeTitle2 + ' has been deleted');
        window.speechSynthesis.speak(msg);
        answer = 'Note with title: ' + changeTitle2 + ' has been deleted';
        localStorage.removeItem('savedNote2');
        localStorage.removeItem('changeTitle2');
      }
      if ((deletedNote == savedNote3) || (deletedNote == changeTitle3)) {
        var msg = new SpeechSynthesisUtterance('Note with title: ' + changeTitle3 + ' has been deleted');
        window.speechSynthesis.speak(msg);
        answer = 'Note with title: ' + changeTitle3 + ' has been deleted';
        localStorage.removeItem('savedNote3');
        localStorage.removeItem('changeTitle3');
      }
    } 
    else {
      var msg = new SpeechSynthesisUtterance('What you said did not match any of your saved titles');
      window.speechSynthesis.speak(msg);
      answer = 'What you said did not match any of your saved titles';
    }
  }
  if (question.toUpperCase() == 'SHOW ME ALL NOTES' || question.toUpperCase() == 'SHOW ALL NOTES' || question.toUpperCase() == 'ALL NOTES' || question.toUpperCase() == 'SHOW NOTES') {
    if (ntErased != 'true') {
      var msg = new SpeechSynthesisUtterance('Here are all the notes you have');
      window.speechSynthesis.speak(msg);
      answer = 'Here are all the notes you have: <br><br><u>SAVED NOTES</u><br><br><br>';
      if ((savedNote1 != null) && (changeTitle1 != null)) {
        answer += '<em>' + changeTitle1 + '</em> : ' + savedNote1 + '<br/><br/>';
      }
      if ((savedNote2 != null) && (changeTitle2 != null)) {
        answer += '<em>' + changeTitle2 + '</em> : ' + savedNote2 + '<br/><br/>';
      }
      if ((savedNote3 != null) && (changeTitle3 != null)) {
        answer += '<em>' + changeTitle3 + '</em> : ' + savedNote3 + '<br/><br/>';
      }
    } 
    else if (ntErased == 'true') {
      var msg = new SpeechSynthesisUtterance('You have deleted your notes');
      window.speechSynthesis.speak(msg);
      answer = 'You have deleted your notes';
    } 
    else {
      var msg = new SpeechSynthesisUtterance('You don\'t have any notes');
      window.speechSynthesis.speak(msg);
      answer = 'You don\'t have any notes';
    }
  }
  if (question.toUpperCase() == 'DELETE NOTES' || question.toUpperCase() == 'ERASE NOTES' || question.toUpperCase() == 'DELETE ALL NOTES' || question.toUpperCase() == 'ERASE ALL NOTES') {
    var ntErased = 'true';
    localStorage.setItem('ntErased', ntErased);
    localStorage.removeItem('savedNote1');
    localStorage.removeItem('changeTitle1');
    localStorage.removeItem('savedNote2');
    localStorage.removeItem('changeTitle2');
    localStorage.removeItem('savedNote3');
    localStorage.removeItem('changeTitle3');
    localStorage.removeItem('ntTrigger');
    var msg = new SpeechSynthesisUtterance('Your notes have been deleted successfully');
    window.speechSynthesis.speak(msg);
    answer = 'Your notes have been deleted successfully';
  }
  if (question.toUpperCase() == 'FLIGHTS' || question.toUpperCase() == 'FLIGHT' || question.toUpperCase() == 'BOOK A FLIGHT') {
    var flightFrom = prompt('\n From what city?');
    localStorage.setItem('flightFrom', flightFrom);
    var flightTo = prompt('\nTo what city?');
    localStorage.setItem('flightTo', flightTo);
    window.open('https://www.google.com/search?q=' + flightFrom + '%20to%20' + flightTo);
    var msg1 = new SpeechSynthesisUtterance('I found several flights from' + ' ' +
    flightFrom + ' ' + 'to' + ' ' + flightTo);
    window.speechSynthesis.speak(msg1);
    answer = 'I found some flights on google.';
  }
  if (question.toUpperCase() == 'BOOK A HOTEL' || question.toUpperCase() == 'BOOK HOTEL' || question.toUpperCase() == 'HOTELS' || question.toUpperCase() == 'HOTEL') {
    var hotelBookingPlace = prompt('\nType the city where you want to find hotels');
    localStorage.setItem('hotelBookingPlace', hotelBookingPlace);
    window.open('http://www.hotelscombined.com/Search?search=' + hotelBookingPlace);
    answer = 'I found several hotels in ' + hotelBookingPlace;
  }
  /* 

  This is one of the only interactions are still unchanged since i started developing
  Yveete. The reason I kept is because it was the first interaction that depends on what the user
  has told yveete before that will influence yveete's answer. For example if the user says 
  'where is <country/city>' and 'book a hotel' yveete will recommend those place the user mentioned.
  Compared to another user who said 'book a flight', yveete will only mention the flight's destination 
  and departure.

  */
  if (question.toUpperCase() == 'WHAT PLACES DO YOU RECOMMEND FOR HOLIDAYS' || question.toUpperCase() == 'WHAT PLACES DO YOU RECOMMEND FOR ME TO GO' || question.toUpperCase() == 'WHERE SHOULD I GO FOR HOLIDAYS' || question.toUpperCase() == 'WHERE SHOULD I GO FOR VACATION' || question.toUpperCase() == 'WHAT PLACES SHOULD I VISIT' || question.toUpperCase() == 'WHAT PLACES DO YOU RECOMMEND' || question.toUpperCase() == 'WHAT PLACES DO YOU RECOMMEND FOR HOLIDAY' || question.toUpperCase() == 'WHAT PLACES DO YOU RECOMMEND FOR VACATION') {
    if ((hotelBookingPlace != null) && (flightFrom != null) && (flightTo != null) && (place != null)) {
      var msg = new SpeechSynthesisUtterance('Based on what I know from you, you like ' + hotelBookingPlace + ', ' + flightFrom + ', ' + flightTo + ' and ' + place);
      window.speechSynthesis.speak(msg);
      answer = 'Based on what I know from you, you like ' + hotelBookingPlace + ', ' + flightFrom + ', ' + flightTo + ' and ' + place;
    } 
    else if ((hotelBookingPlace == null) && (flightFrom == null) && (flightTo == null) && (place == null)) {
      var msg = new SpeechSynthesisUtterance('You never told me about any places that you like, I usually remember when you tell me where to book flights or hotels etc.');
      window.speechSynthesis.speak(msg);
      answer = 'You never told me about any places that you like, I usually remember when you tell me where to book flights or hotels etc.';
    } 
    else if ((hotelBookingPlace == null) && (flightTo != null) && (flightFrom != null) && (place != null)) {
      var msg = new SpeechSynthesisUtterance('Based on what I know from you, you like ' + flightFrom + ', ' + flightTo + ' and ' + place);
      window.speechSynthesis.speak(msg);
      answer = 'Based on what I know from you, you like ' + flightFrom + ', ' + flightTo + ' and ' + place;
    } 
    else if ((hotelBookingPlace == null) && (flightTo == null) && (flightFrom == null) && (place != null)) {
      var msg = new SpeechSynthesisUtterance('Based on what I know from you, you like ' + place);
      window.speechSynthesis.speak(msg);
      answer = 'Based on what I know from you, you like ' + place;
    } 
    else if ((hotelBookingPlace == null) && (place == null) && (flightTo != null) && (flightFrom != null)) {
      var msg = new SpeecSynthesisUtterance('Based on what I know from you, you like'
      + flightFrom + ' and ' + flightTo);
      window.speechSynthesis.speak(msg);
      answer = 'Based on what I know from you, you like ' + flightFrom + ' and ' + flightTo;
    } 
    else if ((flightTo == null) && (flightFrom == null) && (place != null) && (hotelBookingPlace != null)) {
      var msg = new SpeechSynthesisUtterance('Based on what I know from you, you like '
      + hotelBookingPlace + ' and ' + place);
      window.speechSynthesis.speak(msg);
      answer = 'Based on what I know from you, you like ' + hotelBookingPlace + ' and ' + place;
    } 
    else if ((place == null) && (flightTo == null) && (flightFrom == null) && (hotelBookingPlace != null)) {
      var msg = new SpeechSynthesisUtterance('Based on what I know from you, you like ' + hotelBookingPlace);
      window.speechSynthesis.speak(msg);
      answer = 'Based on what I know from you, you like ' + hotelBookingPlace;
    } 
    else if ((place == null) && (flightTo != null) && (flightFrom != null) && (hotelBookingPlace != null)) {
      var msg = new SpeechSynthesisUtterance('Based on what I know from you, you like '
      + flightFrom + ', ' + flightTo + ' and ' + place);
      window.speechSynthesis.speak(msg);
      answer = 'Based on what I know from you, you like ' + flightFrom + ', ' + flightTo + ' and ' + place;
    }
  }
  /* 
  There is another version of multitask in the R&D section that doesn't use prompts.
  Once i finish that version I will delete this one.
  */
  //change this with regex
  if (question.toUpperCase() == 'RESTAURANTS' || question.toUpperCase() == 'FIND RESTAURANTS') {
    var askRes = prompt('\nWhat restaurant do you want me to look for')
    window.open('https://www.google.ro/maps/search/' + askRes);
    answer = 'ok';
  }
  if (question.toUpperCase() == 'MAP DIRECTIONS' || question.toUpperCase() == 'MAP DIRECTION' || question.toUpperCase() == 'GPS') {
    //var placeFrom = prompt('From where?');
    var placeTo = prompt('\nTo what place?');
    localStorage.setItem('placeTo', placeTo);
    //window.open('https://www.google.com/maps/dir/' + placeFrom + '=' + placeTo + '&directionsmode=transit');
    window.open('https://www.google.com/maps?saddr=My+Location&daddr=' + placeTo)
    answer = 'I have used your current location and found some routes that will lead you to '
    + placeTo;
  }
  if (question.toUpperCase() == 'CLEAR MEMORY' || question.toUpperCase() == 'RESET MEMORY' || question.toUpperCase() == 'DELETE MEMORY' || question.toUpperCase() == 'ERASE MEMORY') {
    var askClearMemo = prompt('\nAre you sure you want to erase all my memory', 'if you do want then type "yes"');
    if (askClearMemo == 'yes') {
      localStorage.clear();
      answer = 'All my memory that you have taught me has been erased succesfully';
    }
    if (askClearMemo != 'yes') {
      answer = 'My memory has <em>not</em> been deleted';
    }
  } 
  if (question == "sudo memory") {
    answer = "Memory has been deleted";
  }

  //////////////////////////////////////////////////////////////////////////////
  /* Yveete - Math */
  //////////////////////////////////////////////////////////////////////////////

  /* 
    'ansholder' is the is the previous answer that is found on the auto-complete droplist.
    This helpful for when multiplying big numbers and then 
    needing the answer to lets say subtract something. The placeholder 
    will provide the previous anser (multiplication in this case) so you
    can do the subtraction immediately.

    You can also put an 'x' or a 'y' to solve equations:
    x + 1 = 2
   */
  if (question.match(/[0-9]/g) && (question.match(".*\\bplus\\b.*") || question.match('\\+'))) {
    if (question.match(".*\\bx plus\\b.*") && question.match("=")) {
      var addAns = question.substring(question.indexOf("=") + 1);
      var clearAll = question.replace(question.substring(question.indexOf("=") -1), '');
      var addNum2 = clearAll.substring(7);
      var addCalcMatVar1 = addAns - addNum2;
      var ansHolder = addCalcMatVar1;
      localStorage.setItem('ansHolder', ansHolder);
      var addCalcMatVar1Final = 'x + ' + addNum2 + ' = ' + addAns + "<br><br>x = " + addCalcMatVar1;
      answer = 'The answer ' + addCalcMatVar1Final;
    } 
    else {
      var addNum1 = question.replace(/\D.*/g, '');
      var addNum2 = question.replace(/.*\D/g, '');
      var addCalc = +addNum1 + +addNum2;
      var ansHolder = addCalc;
      localStorage.setItem('ansHolder', ansHolder);
      var addFinal = addNum1 + ' + ' + addNum2 + ' = ' + ( +addNum1 + +addNum2);
      answer = 'The answer is ' + addFinal;
    }
  }
  if (question.match(/[0-9]/g) && (question.match(".*\\bminus\\b.*") || question.match('\\-'))) {
    if (question.match(".*\\bx minus\\b.*") && question.match("=")) {
      var subtractAns = question.substring(question.indexOf("=") + 1);
      var clearAll = question.replace(question.substring(question.indexOf("=") -1), '');
      var subtractNum2 = clearAll.substring(8);
      var subtractCalcMatVar1 = +subtractAns + +subtractNum2;
      var ansHolder = subtractCalcMatVar1;
      localStorage.setItem('ansHolder', ansHolder);
      var subtractCalcMatVar1Final = 'x - ' + subtractNum2 + ' = ' + subtractAns + "<br><br>x = " + subtractCalcMatVar1;
      answer = 'The answer ' + subtractCalcMatVar1Final;
    } 
    else {
      var subtractNum1 = question.replace(/\D.*/g, '');
      var subtractNum2 = question.replace(/.*\D/g, '');
      var subtractCalc = subtractNum1 - subtractNum2;
      var ansHolder = addCalc;
      localStorage.setItem('ansHolder', ansHolder);
      var subtractFinal = subtractNum1 + ' - ' + subtractNum2 + ' = ' + subtractCalc;
      answer = 'The answer is ' + subtractFinal;
    }
  }
  if (question.match(/[0-9]/g) && (question.match(".*\\bdivide\\b.*") || question.match("/"))) {
    if (question.match(".*\\bx divide\\b.*") && (question.match("="))) {
      var divideAns = question.substring(question.indexOf("=") + 1);
      var clearAll = question.replace(question.substring(question.indexOf("=") -1), '');
      var divideNum2 = clearAll.substring(9);
      var divideCalcMatVar1 = divideAns * divideNum2;
      var ansHolder = divideCalcMatVar1;
      localStorage.setItem('ansHolder', ansHolder);
      var divideCalcMatVar1Final = 'x &divide; ' + divideNum2 + ' = ' + divideAns + "<br><br>x = " + divideCalcMatVar1;
      answer = 'The answer ' + divideCalcMatVar1Final;
    } 
    else if (question.match(".*\\bdivide x\\b.*") && (question.match("="))) {
      var divideAns = question.substring(question.indexOf("=") + 1);
      var clearAll = question.replace(question.substring(question.indexOf(" divide")), '');
      var divideNum1 = clearAll.substring(0);
      var divideCalcMatVar2 = divideNum1 / divideAns;
      var ansHolder = divideCalcMatVar2;
      localStorage.setItem('ansHolder', ansHolder);
      var divideCalcMatVar2Final = divideNum1 + ' &divide; x = ' + divideAns + "<br><br>x = " + divideCalcMatVar2;
      answer = 'The answer ' + divideCalcMatVar2Final;
    } 
    else {
      var divideNum1 = question.replace(/\D.*/g, '');
      var divideNum2 = question.replace(/.*\D/g, '');
      var divideCalc = divideNum1 / divideNum2;
      var ansHolder = divideCalc;
      localStorage.setItem('ansHolder', ansHolder);
      var divideFinal = divideNum1 + ' &divide; ' + divideNum2 + ' = ' + divideCalc;
      answer = 'The answer is ' + divideFinal;
    }
  }
  if (question.match(/[0-9]/g) && (question.match(".*\\btimes\\b.*") || (question.match("x") && question.match('^(?!.*[minus|plus|divide]).*$')))) {
    if (question.match(".*\\bx times\\b.*") && question.match('=')) {
      var multiplyAns = question.substring(question.indexOf("=") + 1);
      var clearAll = question.replace(question.substring(question.indexOf("=") -1), '');
      var multiplyNum2 = clearAll.substring(8);
      var multiplyCalcMatVar1 = multiplyAns / multiplyNum2;
      var ansHolder = multiplyCalcMatVar1;
      localStorage.setItem('ansHolder', ansHolder);
      var multiplyCalcMatVar1Final = 'x * ' + multiplyNum2 + ' = ' + multiplyAns + "<br><br>x = " + multiplyCalcMatVar1;
      answer = 'The answer ' + multiplyCalcMatVar1Final;
    }
    else if (question.match(".*\\btimes x\\b.*") && question.match('=')) {
      var multiplyAns = question.substring(question.indexOf("=") + 1);
      var clearAll = question.replace(question.substring(question.indexOf("=") -1), '');
      var multiplyNum1 = clearAll.substring(0);
      var multiplyCalcMatVar2 = multiplyAns / multiplyNum1;
      var ansHolder = multiplyCalcMatVar2;
      localStorage.setItem('ansHolder', ansHolder);
      var multiplyCalcMatVar2Final = multiplyNum1 + ' * x = ' + multiplyAns + "<br><br>x = " + multiplyCalcMatVar2;
      answer = 'The answer ' + multiplyCalcMatVar2Final;
    }
    else {
      var multiplyNum1 = question.replace(/\D.*/g, '');
      var multiplyNum2 = question.replace(/.*\D/g, '');
      var multiplyCalc = multiplyNum1 * multiplyNum2;
      var ansHolder = multiplyCalc;
      localStorage.setItem('ansHolder', ansHolder);
      var multiplyFinal = multiplyNum1 + ' x ' + multiplyNum2 + ' = ' + multiplyCalc;
      answer = 'The answer is ' + multiplyFinal;
    }
  }
  //alternative
  if (question.match('.*\\broot\\b.*')) {
    var sqrtValue = question.substring(5);
    if (sqrtValue.match(/[0-9]/i)) {
      var squareRootCalc = '&radic;' + sqrtValue + ' = ' + (Math.sqrt(sqrtValue));
      localStorage.setItem('squareRootCalc', squareRootCalc);
      var date = new Date();
      var rootTime = date.getHours() + date.getMinutes() + date.getSeconds();
      localStorage.setItem('rootTime', rootTime);
      answer = 'The answer is ' + squareRootCalc;
    }
  }
  if (question.toUpperCase() == 'AREA OF CIRCLE' || question.toUpperCase() == 'CIRCLE AREA') {
    var radius = prompt('\nTell me the radius of the circle');
    var areaCircleFinal = Math.PI + ' x ' + radius + '<sup>2</sup> = ' + (Math.PI * radius * radius);
    localStorage.setItem('areaCircleFinal', areaCircleFinal);
    var date = new Date();
    var areaCircleTime = date.getHours() + date.getMinutes() + date.getSeconds();
    localStorage.setItem('areaCircleTime', areaCircleTime);
    answer = 'The precise answer is ' + Math.PI * radius * radius;
  }
  if (question.toUpperCase() == 'CIRCUMFERENCE' || question.toUpperCase() == 'CIRCUM') {
    var radius = prompt('\nWhat is the radius of the circle?');
    var circumFinal = '2 x ' + Math.PI + ' x ' + radius + ' = ' + (2 * Math.PI * radius);
    localStorage.setItem('circumFinal', circumFinal);
    var date = new Date();
    var circumTime = date.getHours() + date.getMinutes() + date.getSeconds();
    localStorage.setItem('circumTime', circumTime);
    answer = 'The answer is ' + 2 * Math.PI * radius;
  }

  //alternative
  if (question.match('.*\\bto the power of\\b.*')) {
    var clearAll = question.replace('to the power of', '');
    var numCleared = clearAll.replace(/\D.*/g, '');
    var powerCleared = clearAll.replace(/.*\D/g, '');
    var powerCalc = Math.pow(numCleared, powerCleared);
    var numPower = numCleared + '<sup>' + powerCleared + '</sup> = ' + powerCalc;
    localStorage.setItem('numPower', numPower);
    answer = 'The answer is ' + numPower;
  }  
  //alternative
  //inverse cos, priority hypotenuse
  if (((question.match('.*\\bcos h\\b.*')) && (question.match('a')) || (question.match('.*\\bcos hypotenuse\\b.*')) && (question.match('adjacent')))) {
    var cosA = question.replace(/^\D+|\D.*$/g, '');
    var cosH = question.replace(/.*\D(?=\d)|\D+$/g, '');
    if (question.match('.*\\brad\\b.*') || question.match('.*\\bradians\\b.*')) {
      var cosHACalcRad = Math.acos(cosH / cosA);
      var cosHAFinalRad = 'cos<sup>-1</sup> x = ' + cosHACalcRad;
      answer = 'The answer is ' + cosHAFinalRad + ' rad';
    } 
    else if (question.match('.*\\bdeg\\b.*') || question.match('.*\\bdegrees\\b.*')) {
      var cosHACalcDeg = Math.acos(cosH / cosA) * (180 / Math.PI);
      var cosHAFinalDeg = 'cos<sup>-1</sup> x = ' + cosHACalcDeg;
      answer = 'The answer is ' + cosHAFinalDeg + ' deg';
    } 
    else if ((cosH != null) && (cosA != null)) {
      var cosHACalcDeg = Math.acos(cosH / cosA) * (180 / Math.PI);
      var cosHAFinalDeg = 'cos<sup>-1</sup> x = ' + cosHACalcDeg;
      answer = 'The answer is ' + cosHAFinalDeg + ' deg';
    } 
    else {
      answer = 'Something went wrong';
    }
  }  
  //inverse cos, priority adjacent
  if (((question.match('.*\\bcos a\\b.*')) && (question.match('h')) || (question.match('.*\\bcos adjacent\\b.*')) && (question.match('hypotenuse')))) {
    var cosH = question.replace(/^\D+|\D.*$/g, '');
    var cosA = question.replace(/.*\D(?=\d)|\D+$/g, '');
    if (question.match('.*\\brad\\b.*') || question.match('.*\\bradians\\b.*')) {
      var cosAHCalcRad = Math.acos(cosH / cosA);
      var cosAHFinalRad = 'cos<sup>-1</sup> x = ' + cosAHCalcRad;
      answer = 'The answer is ' + cosAHFinalRad + ' rad';
    } 
    else if (question.match('.*\\bdeg\\b.*') || question.match('.*\\bdegrees\\b.*')) {
      var cosAHCalcDeg = Math.acos(cosH / cosA) * (180 / Math.PI);
      var cosAHFinalDeg = 'cos<sup>-1</sup> x = ' + cosAHCalcDeg;
      answer = 'The answer is ' + cosAHFinalDeg + ' deg';
    } 
    else if ((csoH != null) && (cosA != null)) {
      var cosHACalcDeg = Math.acos(cosH / cosA) * (180 / Math.PI);
      var cosHAFinalDeg = 'cos<sup>-1</sup> x = ' + cosHACalcDeg;
      answer = 'The answer is ' + cosHAFinalDeg + ' deg';
    } 
    else {
      answer = 'Something went wrong';
    }
  } 

  //cos with input of an angle 1
  if ((question.match('.*\\bcos\\b.*')) && (question.match('h') || question.match('hypotenuse')) && (question.match('^(?!.*cos h).*$')) && (question.match('^(?!.*cos a).*$'))) {
    var cosANG = question.replace(/^\D+|\D.*$/g, '');
    var cosH = question.replace(/.*\D(?=\d)|\D+$/g, '');
    if ((cosANG.match(/[0-9]/g)) && (cosH.match(/[0-9]/g))) {
      if (question.match('.*\\binches\\b.*')) {
        var cosANGHCalcInches = (cosH * Math.cos(cosANG)) * 0.3937;
        var cosANGHFinalInches = cosH + ' x cos ' + cosANG + ' = ' + cosANGHCalcInches + ' inches';
        answer = 'The answer is ' + cosANGHFinalInches;
      } 
      else {
        var cosANGHCalcCM = cosH * Math.cos(cosANG);
        var cosANGHFinalCM = cosH + ' x cos ' + cosANG + ' = ' + cosANGHCalcCM + ' cm';
        answer = 'The answer is ' + cosANGHFinalCM;
      }
    } 
    else {
      answer = 'Something went wrong';
    }
  }  

  //cos with input of an angle 2
  if ((question.match('.*\\bcos\\b.*')) && (question.match('a') || question.match('adjacent')) && (question.match('^(?!.*cos h).*$')) && (question.match('^(?!.*cos a).*$'))) {
    var cosANG = question.replace(/^\D+|\D.*$/g, '');
    var cosA = question.replace(/.*\D(?=\d)|\D+$/g, '');
    if ((cosANG.match(/[0-9]/g)) && (cosA.match(/[0-9]/g))) {
      if (question.match('.*\\binches\\b.*')) {
        var cosANGACalcInch = (cosA / Math.cos(cosANG)) * 0.3937;
        var cosANGAFinalInch = cosA + ' / cos ' + cosANG + ' = ' + cosANGACalcInch + ' inches';
        answer = 'The answer is ' + cosANGAFinalInch;
      } 
      else {
        var cosANGACalcCM = cosA / Math.cos(cosANG);
        var cosANGAFinalCM = cosA + ' / cos ' + cosANG + ' = ' + cosANGACalcCM;
        answer = 'The answer is ' + cosANGAFinalCM + ' cm';
      }
    } 
    else {
      answer = 'Something went wrong';
    }
  }  
  //inverse sin, priority hypotenuse
  if (((question.match('.*\\bsin h\\b.*')) && (question.match('o')) || (question.match('.*\\bsin hypotenuse\\b.*')) && (question.match('opposite')))) {
    var sinO = question.replace(/^\D+|\D.*$/g, '');
    var sinH = question.replace(/.*\D(?=\d)|\D+$/g, '');
    if (question.match('.*\\brad\\b.*') || question.match('.*\\bradians\\b.*')) {
      var sinHOCalcRad = Math.asin(sinH / sinO);
      var sinH0FinalRad = 'sin<sup>-1</sup> x = ' + sinHOCalcRad;
      answer = 'The answer is ' + sinH0FinalRad + ' rad';
    } 
    else if (question.match('.*\\bdegrees\\b.*') || question.match('.*\\bdegrees\\b.*')) {
      var sinHOCalcDeg = Math.asin(sinH / sinO) * (180 / Math.PI);
      var sinHOFinalDeg = 'sin<sup>-1</sup> x = ' + sinHOCalcDeg;
      answer = 'The answer is ' + sinHOFinalDeg + ' deg';
    } 
    else if ((sinH != null) && (sinO != null)) {
      var sinHOCalcDeg = Math.asin(sinH / sinO) * (180 / Math.PI);
      var sinHOFinalDeg = 'sin<sup>-1</sup> x = ' + sinHOCalcDeg;
      answer = 'The answer is ' + sinHOFinalDeg + ' deg';
    } 
    else {
      answer = 'Something went wrong';
    }
  }  
  //inverse sin, priority opposite
  if (((question.match('.*\\bsin o\\b.*')) && (question.match('h')) || (question.match('.*\\bsin opposite\\b.*')) && (question.match('hypotenuse')))) {
    var sinH = question.replace(/^\D+|\D.*$/g, '');
    var sinO = question.replace(/.*\D(?=\d)|\D+$/g, '');
    if (question.match('.*\\brad\\b.*') || question.match('.*\\bradians\\b.*')) {
      var sinOHCalcRad = Math.asin(sinH / sinO);
      var sin0HFinalRad = 'sin<sup>-1</sup> x = ' + sinOHCalcRad;
      answer = 'The answer is ' + sin0HFinalRad + ' rad';
    } 
    else if (question.match('.*\\bdeg\\b.*') || question.match('.*\\bdegrees\\b.*')) {
      var sinOHCalcDeg = Math.asin(sinH / sinO) * (180 / Math.PI);
      var sinOHFinalDeg = 'sin<sup>-1</sup> x = ' + sinOHCalcDeg;
      answer = 'The answer is ' + sinOHFinalDeg + ' deg';
    } 
    else if ((sinH != null) && (sinO != null)) {
      var sinOHCalcDeg = Math.asin(sinH / sinO) * (180 / Math.PI);
      var sinOHFinalDeg = 'sin<sup>-1</sup> x = ' + sinOHCalcDeg;
      answer = 'The answer is ' + sinOHFinalDeg + ' deg';
    } 
    else {
      answer = 'Something went wrong';
    }
  }  
  //sin with an angle 1
  if ((question.match('.*\\bsin\\b.*')) && (question.match('h') || question.match('hypotenuse')) && (question.match('^(?!.*sin h).*$')) && (question.match('^(?!.*sin o).*$'))) {
    var sinANG = question.replace(/^\D+|\D.*$/g, '');
    var sinH = question.replace(/.*\D(?=\d)|\D+$/g, '');
    if ((sinANG.match(/[0-9]/g)) && (sinH.match(/[0-9]/g))) {
      if (question.match('.*\\binches\\b.*')) {
        var sinANGHCalcInches = (sinH * Math.sin(sinANG)) * 0.3937;
        var sinANGHFinalInches = sinH + ' x sin ' + sinANG + ' = ' + sinANGHCalcInches + ' inches';
        answer = 'The answer is ' + sinANGHFinalInches;
      } 
      else {
        var sinANGHCalcCM = sinH * Math.sin(sinANG);
        var sinANGHFinalCM = sinH + ' x sin ' + sinANG + ' = ' + sinANGHCalcCM + ' cm';
        answer = 'The answer is ' + sinANGHFinalCM;
      }
    } 
    else {
      answer = 'Something went wrong';
    }
  }  
  //sin with an angle 2
  if ((question.match('.*\\bsin\\b.*')) && (question.match('o') || question.match('opposite')) && (question.match('^(?!.*sin h).*$')) && (question.match('^(?!.*sin o).*$'))) {
    var sinANG = question.replace(/^\D+|\D.*$/g, '');
    var sinO = question.replace(/.*\D(?=\d)|\D+$/g, '');
    if ((sinANG.match(/[0-9]/g)) && (sinO.match(/[0-9]/g))) {
      if (question.match('.*\\binches\\b.*')) {
        var sinANGOCalcInches = (sinO / Math.sin(sinANG)) * 0.3937;
        var sinANGOFinalInches = sinO + ' / sin ' + sinANG + ' = ' + sinANGOCalcInches + ' inches';
        answer = 'The answer is ' + sinANGOFinalInches;
      } 
      else {
        var sinANGOCalcCM = sinO / Math.sin(sinANG);
        var sinANGOFinalCM = sinO + ' / sin ' + sinANG + ' = ' + sinANGOCalcCM + ' cm';
        answer = 'The answer is ' + sinANGOFinalCM;
      }
    } 
    else {
      answer = 'Something went wrong';
    }
  }  
  //inverse tan, priority adjacent
  if (((question.match('.*\\btan a\\b.*')) && (question.match('o')) || (question.match('.*\\btan adjacent\\b.*')) && (question.match('opposite')))) {
    var tanA = question.replace(/^\D+|\D.*$/g, '');
    var tanO = question.replace(/.*\D(?=\d)|\D+$/g, '');
    if (question.match('.*\\brad\\b.*') || question.match('.*\\bradians\\b.*')) {
      var tanAOCalcRad = Math.atan(tanO / tanA);
      var tanAOFinalRad = 'tan<sup>-1</sup> x = ' + tanAOCalcRad;
      answer = 'The answer is ' + tanAOFinalRad + ' rad';
    } 
    else if (question.match('.*\\bdeg\\b.*') || question.match('.*\\bdegrees\\b.*')) {
      var tanAOCalcDeg = Math.atan(tanO / tanA) * (180 / Math.PI);
      var tanAOFinalDeg = 'tan<sup>-1</sup> x = ' + tanAOCalcDeg;
      answer = 'The answer is ' + tanAOFinalDeg + ' deg';
    } 
    else if ((tanO != null) && (tanA != null)) {
      var tanAOCalcDeg = Math.atan(tanO / tanA) * (180 / Math.PI);
      var tanAOCalcDeg = 'tan<sup>-1</sup> x = ' + tanAOCalcDeg;
      answer = 'The answer is ' + tanAOCalcDeg + ' deg';
    } 
    else {
      answer = 'Something went wrong';
    }
  }  
  //inverse tan, priority opposite
  if (((question.match('.*\\btan o\\b.*')) && (question.match('a')) || (question.match('.*\\btan opposite\\b.*')) && (question.match('adjacent')))) {
    var tanO = question.replace(/^\D+|\D.*$/g, '');
    var tanA = question.replace(/.*\D(?=\d)|\D+$/g, '');
    if (question.match('.*\\brad\\b.*') || question.match('.*\\bradians\\b.*')) {
      var tanOACalcRad = Math.atan(tanO / tanA);
      var tanOAFinalRad = 'tan<sup>-1</sup> x = ' + tanOACalcRad;
      answer = 'The answer is ' + tanOAFinalRad + ' rad';
    } 
    else if (question.match('.*\\bdeg\\b.*') || question.match('.*\\bdegrees\\b.*')) {
      var tanOACalcDeg = Math.atan(tanO / tanA) * (180 / Math.PI);
      var tanOAFinalDeg = 'tan<sup>-1</sup> x = ' + tanOACalcDeg;
      answer = 'The answer is ' + tanOAFinalDeg + ' deg';
    } 
    else if ((tanO != null) && (tanA != null)) {
      var tanOACalcDeg = Math.atan(tanO / tanA) * (180 / Math.PI);
      var tanOACalcDeg = 'tan<sup>-1</sup> x = ' + tanOACalcDeg;
      answer = 'The answer is ' + tanOACalcDeg + ' deg';
    } 
    else {
      answer = 'Something went wrong';
    }
  }
  //alternative
  if (question.match('.*\\bsphere radius\\b.*')) {
    var sphereRadius = question.substring(13);
    if (sphereRadius.match(/[0-9]/g)) {
      var sphereRadiusCalc = 4 * Math.PI * sphereRadius * sphereRadius;
      var sphereRadiusFinal = '4 x &pi; x ' + sphereRadius + '<sup>2</sup> = ' + sphereRadiusCalc;
      answer = 'The answer is ' + sphereRadiusFinal;
    } 
    else if (sphereRadius == null) {
      answer = 'You did not type the radius';
    } 
    else if (sphereRadius.match(/[a-z]/gi)) {
      answer = 'Please type the radius in numbers only';
    } 
    else {
      answer = 'Something went wrong';
    }
  }
  if (question.match('.*\\bsphere volume\\b.*')) {
    var sphereAreaRadius = question.substring(13);
    if (sphereAreaRadius.match(/[0-9]/g)) {
      var sphereAreaCalc = 4 * Math.PI * sphereAreaRadius * sphereAreaRadius;
      var sphereAreaFinal = '4 x &pi; x ' + sphereAreaRadius + '<sup>2</sup> = ' + sphereAreaCalc;
      answer = 'The answer is ' + sphereAreaFinal;
    } 
    else if (sphereAreaRadius == null) {
      answer = 'You did not type the radius';
    } 
    else if (sphereAreaRadius.match(/[a-z]/gi)) {
      answer = 'Please type the radius in numbers only';
    } 
    else {
      answer = 'Something went wrong';
    }
  }  
  /* 

  workout is a method to record your math activity
  Once you start it you ask math question and the answers are
  saved until you type 'show workout' where all the previous answers
  will be shown in a new window (using document.writeln();) 
  */
  if (question.toUpperCase() == 'START WORKOUT') {
    var startWorkout = 'true';
    localStorage.setItem('startWorkout', startWorkout);
    var msg = new SpeechSynthesisUtterance('You can start your workout');
    window.speechSynthesis.speak(msg);
    answer = 'You can start your workout';
  }
  if (question.toUpperCase() == 'DELETE WORKOUT') {
    var eraseWorkout = 'true';
    localStorage.removeItem('addFinal');
    localStorage.removeItem('subtractFinal');
    localStorage.removeItem('divideFinal');
    localStorage.removeItem('multiplyFinal');
    localStorage.removeItem('sphereAreaFinal');
    localStorage.removeItem('sphereVolumeFinal');
    localStorage.removeItem('tanFinal');
    localStorage.removeItem('sinFinal');
    localStorage.removeItem('cosFinal');
    localStorage.removeItem('numPower');
    localStorage.removeItem('circumFinal');
    localStorage.removeItem('areaCircleFinal');
    localStorage.removeItem('squareRootCalc');
    var startWorkout = 'false';
    localStorage.setItem('startWorkout', startWorkout);
    var msg = new SpeechSynthesisUtterance('Your math workout has been deleted');
    window.speechSynthesis.speak(msg);
    answer = 'Your math workout has been deleted';
  }
  if (question.toUpperCase() == 'SHOW WORKOUT' || question.toUpperCase() == 'MATH WORKOUT') {
    var startWorkout = localStorage.getItem('startWorkout');
    localStorage.removeItem('eraseWorkout');
    if (startWorkout == 'true') {
      //add
      if (addFinal != null) answer = addFinal + '<br/><br/>';
       else if (addFinal == null) answer = '';
      // add with math variables
      if (add1EquationFinal != null) answer += add1EquationFinal + '<br><br>';
       else if (add1EquationFinal != null) answer = '';
      if (add2EquationFinal != null) answer += add2EquationFinal + '<br><br>';
       else if (add2EquationFinal != null) answer = '';
      //subtract
      if (subtractFinal != null) answer += subtractFinal + '<br/><br/>';
       else if (subtractFinal == null) answer += '';
      //multiply
      if (multiplyFinal != null) answer += multiplyFinal + '<br/><br/>';
       else if (multiplyFinal == null) answer += '';
      //divide
      if (divideFinal != null) answer += divideFinal + '<br/><br/>';
       else if (divideFinal == null) answer += '';
      //sphereAreaFinal
      if (sphereAreaFinal != null) answer += sphereAreaFinal + '<br/><br/>';
       else if (sphereAreaFinal == null) answer += '';
      //sphereVolumeFinal
      if (sphereVolumeFinal != null) answer += sphereVolumeFinal + '<br/><br/>';
       else if (sphereVolumeFinal == null) answer += '';
      //tan
      if (tanFinal != null) answer += tanFinal + '<br/><br/>';
       else if (tanFinal == null) answer += '';
      //sin
      if (sinFinal != null) answer += sinfinal + '<br/><br/>';
       else if (sinFinal == null) answer += '';
      //cos
      if (cosFinal != null) answer += cosfinal + '<br/><br/>';
       else if (cosFinal == null) answer += '';
      //numPower
      if (numPower != null) answer += numPower + '<br/><br/>';
       else if (numPower == null) answer += '';
      //circumfinal
      if (circumFinal != null) answer += circumFinal + '<br/><br/>';
       else if (circumFinal == null) answer += '';
      //areacirclefinal
      if (areaCircleFinal != null) answer += areaCircleFinal + '<br/><br/>';
       else if (areaCircleFinal == null) answer += '';
      //squarerootcalc
      if (squareRootCalc != null) answer += squareRootCalc + '<br/><br/>';
       else if (squareRootCalc == null) answer += '';
      //compound interest
      if (compoundInterestFinal != null) answer += compoundInterestFinal + '<br><br>';
       else if (compoundInterestFinal == null) answer += '';
      //break even point
      if (breakEvenFinal != null) answer += breakEvenFinal + '<br><br>';
       else if (breakEvenFinal == null) answer += '';
      var mathWorkout = window.open('', '', '');
      mathWorkout.document.writeln('<center><h1>Math Workout</h1></center><br/><br/>' +
      '<p style=\'position:absolute;left:13%;right:13%;\'>' + workoutAnswer + '</p>');
    } 
    else if (eraseWorkout == 'true') {
      var msg = new SpeechSynthesisUtterance('You have deleted your previous workout');
      window.speechSynthesis.speak(msg);
      answer = 'You have deleted your previous workout';
    } 
    else if (startWorkout == 'false') {
      var msg = new SpeechSynthesisUtterance('You have deleted your previous workout');
      window.speechSynthesis.speak(msg);
      answer = 'You have deleted your previous workout';
    } 
    else {
      var msg = new SpeechSynthesisUtterance('You didn\'t start a workout yet');
      window.speechSynthesis.speak(msg);
      answer = 'You didn\'t start a workout yet';
    }
  } 


  //////////////////////////////////////////////////////////////////////////////
  /* Yveete - Teaching */
  //////////////////////////////////////////////////////////////////////////////

  /*
  Example for smartcode:
  if user types 'heey' then "window open https://www.facebook.com/ and answer = hello."

  Example for JavaScript:
  if (question == "open gmail") { window.open('https://mail.google.com/mail/u/0/#inbox?compose=new'); answer = "Gmail opened in a new window";} 
  */

  /* 

  The way this works might be confusing although i might have described it in here: http://yveete.kissr.com/help/commands.html
  I will make it easier for users to delete scripts and so on etc.

  Also smart code can be used directly by telling yveete what to do or by typing 'add smartcode' and then
  typing the instructions.

  */

  if (question.toUpperCase() == 'EDIT SCRIPT') {
    var editorBox = document.getElementById('prompt2');
    var saveBtn = document.getElementById('btnPrompt');
    saveBtn.value = 'Save';
    editorBox.style.visibility = 'visible';
    saveBtn.style.visibility = 'visible';
    answer = "You can now edit the script";
    saveBtn.onclick = function () {
      var addedScript = document.getElementById('prompt2').value;
      editorBox.style.visibility = 'hidden';
      saveBtn.style.visibility = 'hidden';
      var editorTrigger = 'true';
      localStorage.setItem('editorTrigger', editorTrigger);
      if (addedScript.match('.*\\bif\\b.*') && addedScript.match('.*\\bquestion\\b.*') && addedScript.match('.*\\banswer\\b.*')) {
        localStorage.setItem('addedScript', addedScript);
        alert('noDebugTrigger');
        var noDebugTrigger = 'true';
        localStorage.setItem('noDebugTrigger', noDebugTrigger);
        //localStorage.removeItem('noDebugTrigger');
      } 
      else if ((addedScript.match('"^(?!.*if).*$"')) && (addedScript.match('"^(?!.*question).*$"')) && (addedScript.match('"^(?!.*answer).*$"'))) {
        alert('DebugTrigger');
        var debugTrigger = 'true';
        localStorage.setItem('debugTrigger', debugTrigger);
        localStorage.setItem('addedScript', addedScript);
      } 
    }   
  }
  if (noDebugTrigger == 'true') {
    eval(addedScript);
  }
  if (debugSCTrigger == 'true') {
    eval(addedScriptSC);
  }  
  if (question == 'delete debugs') {
    localStorage.removeItem('debugTrigger');
    localStorage.removeItem('noDebugTrigger');
    localStorage.removeItem('debugSCTrigger');
    answer = 'done';
  }
  if (question == 'run script') {
    if (debugTrigger == 'true') {
      answer = 'Your script has an error';
      localStorage.removeItem('debugTrigger');
    }
    if (noDebugTrigger == 'true') {
      answer = 'Your script has been added and is working. Reload the page in order for it to work.';
      localStorage.removeItem('debugTrigger');
    }
    if (debugSCTrigger == 'true') {
      answer = 'smartcode ready. please reload';
      localStorage.removeItem('debugTrigger');
    } 
    else {
      answer = 'something went wrong';
    }
  }
  if (question.toUpperCase() == 'DELETE SCRIPT') {
    var deleteScript = 'true';
    localStorage.setItem('deleteScript', deleteScript);
    //localStorage.removeItem('runScript');
    localStorage.removeItem('addedScript');
    answer = 'Your script has been deleted';
  }
  if (question.toUpperCase() == 'DELETE SCRIPT SC') {
    localStorage.removeItem('addedScriptSC');
    answer = 'Your script has been deleted';
  }
  if (question == 'show script') {
    answer = addedScript;
  }
  if (question.match('.*\\bif user types\\b.*')) {
    var userString = question.slice(question.indexOf('\'') + 1, question.lastIndexOf('\''));
    var userString = '\'' + userString + '\'';
    var commandString = question.slice(question.indexOf('"') + 1, question.lastIndexOf('"'));
    if (commandString.match('.*\\bnew tab\\b.*')) {
      var windowOpenLink = commandString.slice(commandString.indexOf('http') + 1, commandString.lastIndexOf('and'));
      var windowOpenLinkCleared = 'h' + windowOpenLink;
      var windowOpenLinkCleared = '\'' + windowOpenLinkCleared.slice(0, - 1) + '\'';
      if (commandString.match('.*\\banswer\\b.*')) {
        var editedAnswer = commandString.slice(commandString.indexOf('=') + 2, commandString.lastIndexOf('.'));
        var editedAnswerCleared = '\'' + editedAnswer + '\';';
        var addedScriptSC = 'if (question == ' + userString + ') {window.open(' + windowOpenLinkCleared + ');answer = ' + editedAnswerCleared + '}';
        localStorage.setItem('addedScriptSC', addedScriptSC);
        answer = 'SmartCode has been saved';
        var debugSCTrigger = 'true';
        localStorage.setItem('debugSCTrigger', debugSCTrigger);
        /*"userString = " + userString + "<br>" +
                     "windowOpenLinkCleared = " + windowOpenLinkCleared + "<br>" +
                     "editedAnswerCleared = " + editedAnswerCleared + "<br>";*/
        /* 
                     if user types 'heey' then "window open https://www.facebook.com/ and answer = hello."
                    */
      }
    } 
    else if (commandString.match('.*\\banswer\\b.*')) {
      var editedAnswer = commandString.slice(commandString.indexOf('=') + 2, commandString.lastIndexOf('.'));
      var editedAnswerCleared = '\'' + editedAnswer + '\';';
      var addedScriptSC = 'if (question == ' + userString + ') {answer = ' + editedAnswerCleared + '}';
      localStorage.setItem('addedScriptSC', addedScriptSC);
      var debugSCTrigger = 'true';
      localStorage.setItem('debugSCTrigger', debugSCTrigger);
      answer = 'SmartCode has been saved, cstr, answer';
    }    //answer = "(" + userString + ", " + commandString + "), <br><br>" + windowOpenLinkCleared + ", <br><br>" + editedAnswerCleared

  }
  if (question.match('.*\\bsmartcode\\b.*')) {
    var editorBox = document.getElementById('prompt3');
    var saveBtn = document.getElementById('btnPrompt');
    editorBox.style.visibility = 'visible';
    editorBox.value = 'if user types \'something\' then "answer = what Yveete will answer."';
    saveBtn.style.visibility = 'visible';
    saveBtn.value = 'Save';
    answer = 'SmartCode has opened';
    saveBtn.onclick = function () {
      var addedScriptSc = document.getElementById('prompt3').value;
      editorBox.style.visibility = 'hidden';
      saveBtn.style.visibility = 'hidden';
      saveBtn.value = '';
      var editorTrigger = 'true';
      var userString = addedScriptSc.slice(addedScriptSc.indexOf('\'') + 1, addedScriptSc.lastIndexOf('\''));
      var commandString = addedScriptSc.slice(addedScriptSc.indexOf('"') + 1, addedScriptSc.lastIndexOf('"'));
      if (commandString.match('.*\\bnew tab\\b.*')) {
        alert('commandString, new tab');
        var windowOpenLink = commandString.slice(commandString.indexOf('http') + 1, commandString.lastIndexOf('and'));
        var windowOpenLinkCleared = 'h' + windowOpenLink;
        var windowOpenLinkCleared = '\'' + windowOpenLinkCleared.slice(0, - 1) + '\'';
        if (commandString.match('.*\\banswer\\b.*')) {
          alert('commandString, new tab, answer');
          var editedAnswer = commandString.slice(commandString.indexOf('= ') + 1, commandString.lastIndexOf('.'));
          var editedAnswerCleared = editedAnswer;
          var addedScriptSC = 'if (question == \'' + userString + '\') {window.open(' + windowOpenLinkCleared + ');'
          + 'answer = \'' + editedAnswerCleared + '\';}';
          localStorage.setItem('addedScriptSC', addedScriptSC);
          alert(addedScriptSC);
          var debugSCTrigger = 'true';
          localStorage.setItem('debugSCTrigger', debugSCTrigger);
        }
      } 
      else if (commandString.match('.*\\banswer\\b.*')) {
        alert('commandString, answer');
        var editedAnswer = commandString.slice(commandString.indexOf('= ') + 1, commandString.lastIndexOf('.'));
        var editedAnswerCleared = editedAnswer;
        var addedScriptSC = 'if (question == \'' + userString + '\') answer = \'' + editedAnswerCleared + '\';';
        localStorage.setItem('addedScriptSC', addedScriptSC);
        alert(addedScriptSC);
        var debugSCTrigger = 'true';
        localStorage.setItem('debugSCTrigger', debugSCTrigger);
      }
    }
  }
  
  //////////////////////////////////////////////////////////////////////////////
  /* Yveete - R&D */
  //////////////////////////////////////////////////////////////////////////////

  /* 

  From here on, interactions might work might not. Usually they do 
  but there is always a reason why they are here.

  */
  if (question.toUpperCase() == 'CREATE A DOCUMENT' || question.toUpperCase() == 'CREATE DOCUMENT' || question.toUpperCase() == 'CREATE DOC' || question.toUpperCase() == 'CREATE A DOC') {
    var docTitle = prompt('\nType the title of the document');
    localStorage.setItem('docTitle', docTitle);
    var docText = prompt('\nType the here the document');
    localStorage.setItem('docText', docText);
    var workout = window.open('', '', '');
    localStorage.setItem('workout', workout);
    var docUrl = document.baseURI;
    localStorage.setItem('docUrl', docUrl);
    if (userName == null) {
      workout.document.writeln('<br/><br/><h1><center>' + docTitle +
      '</center></h1><br/><br/><p style=\'position:absolute;left:13%;right:13%;\'>&nbsp;&nbsp;&nbsp;&nbsp;' + docText + '</p>');
    } 
    else if (userName != null) {
      workout.document.writeln('<br/><br/><h1><center>' + docTitle +
      '</center></h1><br/><br/><p style=\'position:absolute;left:13%;right:13%;\'>&nbsp;&nbsp;&nbsp;&nbsp;' + docText + '<br/><br/><br/>' + userName + '</p>');
    }
    answer = 'Your document has been created';
  }
  if ((question.match('.*\\bemail\\b.*')) && (question.match('\\b' + emailName1)) && (question.match('^(?!.*reminder).*$')) && (question.match('^(?!.*save).*$')) && (question.match('^(?!.*delete).*$'))) {
    //find this functions in additional-scripts/functions.js
    emailDisplay();
    submitEmailButton1();
    answer = 'Your email has opened on a new window';
  }
  if ((question.match('.*\\bemail\\b.*')) && (question.match('\\b' + emailName2)) && (question.match('^(?!.*reminder).*$')) && (question.match('^(?!.*save).*$')) && (question.match('^(?!.*delete).*$'))) {
    emailDisplay();
    submitEmailButton2();
    answer = 'Your email has opened on a new window';
  }
  if ((question.match('.*\\bemail\\b.*')) && (question.match('\\b' + emailName3)) && (question.match('^(?!.*reminder).*$')) && (question.match('^(?!.*save).*$')) && (question.match('^(?!.*delete).*$'))) {
    emailDisplay();
    submitEmailButton3();
    answer = 'Your email has opened on a new window';
  }
  if ((question.match('.*\\breminder\\b.*')) && (question.match('.*\\bsend email\\b.*')) && (question.match('\\b' + emailName1))) {
    var timeReminderEmailInput = prompt('\nSet a time in minutes', '');
    var exceptionEmailInput = timeReminderEmailInput * 60000;
    answer = 'Your reminder has been set, I will alert you in ' + timeReminderEmailInput + ' minutes';
    setTimeout(function () {
      var msg1 = new SpeechSynthesisUtterance('5 minutes reminder');
      window.speechSynthesis.speak(msg1);
      alert('\nREMINDER :' + timeReminderEmailInput + ' minutes ago\n\n Send an email to ' + emailName1);
      window.open('mailto:' + emailAddress1);
    }, exceptionEmailInput);
  }
  if (question.match('.*\\breminder for\\b.*')) {
    var reminderRequestedText = prompt('\nType the text for the reminder');
    var reminderRequestedTime = question.substring(12);
    var exception = reminderRequestedTime * 60000;
    answer = ' Your reminder has been set';
    setTimeout(function () {
      var msg1 = new SpeechSynthesisUtterance(reminderRequestedTime + 'minutes reminder');
      window.speechSynthesis.speak(msg1);
      alert('\nREMINDER : ' + reminderRequestedTime + ' minutes ago\n\n ' + reminderRequestedText);
    }, exception);
  }
  if (question.match('.*\\bcompound interest\\b.*')) {
    var principle = prompt('\nType the principle');
    var rate = prompt('\nType the interest rate');
    var years = prompt('\nType the years');
    if ((principle != null) && (rate != null) && (years != null)) {
      var rateCalc = 1 + rate / 100;
      var newRateCalc = Math.pow(rateCalc, years);
      var compoundInterestCalc = (principle * newRateCalc) - principle;
      var compoundInterestCalcPrinciple = + compoundInterestCalc + + principle;
      var compoundInterestFinal = principle + ' x (1 + ' + rate + '/100)<sup>' + years + '</sup> - ' + principle + ' = ' + compoundInterestCalc + '<br><br>With principle: ' + compoundInterestCalcPrinciple;
      localStorage.setItem('compoundInterestFinal', compoundInterestFinal);
      answer = 'The answer is ' + compoundInterestFinal;
    } 
    else {
      answer = 'Something went wrong';
    }
  }  //break even point

  if (question.match('.*\\bbreak even point\\b.*')) {
    var fixedCost = prompt('\nType the total fixed cost');
    var pricePerUnit = prompt('\nType the price per unit');
    var variablePerUnit = prompt('\nType the variable cost per unit');
    if ((fixedCost != null) && (pricePerUnit != null) && (variablePerUnit != null)) {
      var breakEvenCalc = fixedCost / (pricePerUnit - variablePerUnit);
      var breakEvenFinal = fixedCost + ' &divide (' + pricePerUnit + ' - ' + variablePerUnit + ') = ' + breakEvenCalc;
      localStorage.setItem('breakEvenFinal', breakEvenFinal);
      answer = 'The answer is ' + breakEvenFinal;
    } 
    else {
      answer = 'Something went wrong'
    }
  }
  if ((question.match('.*\\bgenerate break even chart\\b.*')) && (question.match('^(?!.*point).*$'))) {
    var fixedNum1 = prompt('\nType the fixed cost');
    localStorage.setItem('fixedNum1', fixedNum1);
    var fixedNum2 = fixedNum1;
    localStorage.setItem('fixedNum2', fixedNum2);
    var variableNum1 = 0;
    var totalNum1 = fixedNum1;
    localStorage.setItem('totalNum1', totalNum1);
    var totalNum2 = prompt('\nType the total cost');
    localStorage.setItem('totalNum2', totalNum2);
    var variableNum2 = totalNum2 - fixedNum1;
    localStorage.setItem('variableNum2', variableNum2);
    var salesNum1 = 0;
    var salesNum2 = prompt('\nType the sales revenue');
    localStorage.setItem('salesNum2', salesNum2);
    alert('The page will be automatically reloaded, after that type \'chart\' to see the results');
    location.reload();
    answer = 'The chart is ready';
  }
  if (question == 'break even chart') {
    var header = document.getElementById('allHeader');
    if (header.style.visibility == "hidden") {
      answer = "The chart cannot be displayed on the minimized display. Double click anywhere on this dialog to go back to normal view.";
    } else {
        canvasChart.style.visibility = 'visible';
        canvasBtn.style.visibility = 'visible';
        canvasWhite.style.visibility = 'visible';
        canvasBtn.onclick = function() {
          canvasChart.style.visibility = "hidden";
          canvasBtn.style.visibility = "hidden";
          canvasWhite.style.visibility = "hidden";
        }
      var msg = new SpeechSynthesisUtterance("Here is the chart");
      window.speechSynthesis.speak(msg);
      answer = 'Here is the chart';
    }

  }  
  if (question.match('.*\\bi live in\\b.*')) {
    var userLocation = question.substring(10);
    localStorage.setItem('userLocation', userLocation);
    if (userLocation != null) {
      answer = 'I will remember than you live in ' + userLocation + ' from now on';
    }
  }
   var weatherTempC = localStorage.getItem('weatherTempC', weatherTempC);
   if (question.match('.*\\bweather\\b.*')) {
      var receivedTempValue = document.getElementById('temp').innerHTML;
      var userLocation = question.substring(8);
      function getWeather() {
        $.getJSON('http://api.wunderground.com/api/58a1b29a6b2c67d6/conditions/q/' + userLocation + '.json', function(data) {
          var weatherTemp = data['current_observation']['temperature_string'];
          var weatherTempC = data['current_observation']['temp_c'];
          var receivedTemp = $('#temp').html(weatherTemp);
          localStorage.setItem('receivedTemp', receivedTemp);
          localStorage.setItem('weatherTempC', weatherTempC);
        });
        setTimeout(getWeather, 3000);
      }
      getWeather();
      if (receivedTempValue.match(/[0-9]/g)) {
        var msg1 = new SpeechSynthesisUtterance('The temperature is ' + weatherTempC + " celsius");
        window.speechSynthesis.speak(msg1);
        answer = "The temperature in " + userLocation + " is " + receivedTempValue;
      }
      if (!receivedTempValue.match(/[0-9]/g)) {
        var msg2 = new SpeechSynthesisUtterance("Weather information is loading, ask me again in a moment.");
        window.speechSynthesis.speak(msg2);
        answer = "Weather information is loading, ask me again in a moment.";
      }
   }
  /* 
    this works great, it is for displaying the news
    check the ajax script on the other folder. 
  */
  if (question.match('.*\\bthe news\\b.*')) {
    var msg = new SpeechSynthesisUtterance('Here are the news I found,' + newsSpeech);
    window.speechSynthesis.speak(msg);
    if (newsSource != null) {
      answer = '<em>Here are the news I found: </em><br><br>' + newsDisplay + '<br><br>News Source:&nbsp &#126;<em>' + newsSource + '</em>';
    } 
    else {
      answer = '<em>Here are the news I found: </em><br><br>' + newsDisplay;
    }
  }
  if (question.match('.*\\bchange news site to\\b.*')) {
    var newsSource = question.substring(20);
    if (newsSource != null) {
      localStorage.setItem('newsSource', newsSource);
      answer = 'Your news site has been saved, reload the page and ask for the news';
    } 
    else {
      answer = 'You did not type a news source';
    }
  }
  /* This kind of works. Main problem is javascript reloading to many times 
     and crashing.
   */
  var dictTrigger = localStorage.getItem('dictTrigger');
  var definition = localStorage.getItem('definition');
  if (question.match('.*\\bdict\\b.*')) {
    var dictInput = question.substring(5);
    if (dictInput != null) {
      localStorage.setItem('dictInput', dictInput);
      answer = definition;
    }
  }
  /*if (question.match('.*\\bdict\\b.*')) {
    var dictInput = question.substring(5);
    if (dictInput != null) {
      localStorage.setItem('dictInput', dictInput);
    }
    if ((dictTrigger == 'true') && (def != undefined)) {
      answer = def;
      localStorage.removeItem('dictTrigger');
      localStorage.removeItem('dictInput');
      localStorage.removeItem('def');
    } 
    else if (def == undefined) {
      answer = 'definition loading, try again.';
    } 
    else {
      answer = 'definition loading, try again.';
    }
  }*/
  if (question == 'enable dictionary') {
    var enableDict = 'true';
    localStorage.setItem('enableDict', enableDict);
    answer = 'You can now ask me for definitions after you reload the page';
  }
  if (question == 'stop dictionary') {
    localStorage.removeItem('enableDict');
    answer = 'Dictionary will be closed once you reload the page.';
  }
  /* this doesnt work, don't bother */
  var joke = localStorage.getItem('joke');
  if (question == 'tell me a joke') {
    answer = 'Here is a joke that I found<br><br>' + joke;
  }

  if (question.match('.*\\bdark mode\\b.*')) {
    var darkModeTrigger = 'true';
    localStorage.setItem('darkModeTrigger', darkModeTrigger);
    var bodyBackground = document.getElementById('body');
    var header = document.getElementById('mainHeader');
    var darkModeBackground = bodyBackground.style.backgroundColor = '#16001B';
    var darkModeHeader = header.style.backgroundColor = '#2B2628';
    localStorage.setItem('darkModeHeader', darkModeHeader);
    localStorage.setItem('darkModeBackground', darkModeBackground);
    answer = 'Dark mode has been enabled';
  }
  

  return answer
}

//shows of the output
function displayOutput(message, destination) {
  destination.innerHTML += message;
}