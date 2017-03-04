/* this is for emails *//////////////////////////////////////
var Customprompt = document.getElementById('prompt1');
var titleInput = document.getElementById('titleInput');
function promptDisplay() {
    var msg1 = new SpeechSynthesisUtterance('Fill in the following inputs');
    window.speechSynthesis.speak(msg1);
    Customprompt.style.zIndex = '20';
    var blur = document.getElementById('blur');
    var btnPrompt = document.getElementById('btnPrompt');
    btnPrompt.value = 'Submit';
    btnPrompt.style.visibility = 'visible';
    Customprompt.style.visibility = 'visible';
    titleInput.style.visibility = 'visible';
    blur.style.visibility = 'visible';
}
function submitEmailButton1() {
    btnPrompt.onclick = function () {
      var titleInputEmail = document.getElementById('titleInput').value;
      var promptMessageEmail = document.getElementById('prompt1').value;
      Customprompt.style.visibility = 'hidden';
      var blur = document.getElementById('blur');
      Customprompt.style.visibility = 'hidden';
      titleInput.style.visibility = 'hidden';
      blur.style.visibility = 'hidden';
      window.open('mailto:' + emailAddress1 + '?subject=' + titleInputEmail + '&body=' + promptMessageEmail);
    }
}
function submitEmailButton2() {
    btnPrompt.onclick = function () {
      var titleInputEmail = document.getElementById('titleInput').value;
      var promptMessageEmail = document.getElementById('prompt1').value;
      btnPrompt.style.visibility = 'hidden';
      var blur = document.getElementById('blur');
      Customprompt.style.visibility = 'hidden';
      titleInput.style.visibility = 'hidden';
      blur.style.visibility = 'hidden';
      window.open('mailto:' + emailAddress2 + '?subject=' + titleInputEmail + '&body=' + promptMessageEmail);
    }
}
function submitEmailButton3() {
    btnPrompt.onclick = function () {
      var titleInputEmail = document.getElementById('titleInput').value;
      var promptMessageEmail = document.getElementById('prompt1').value;
      btnPrompt.style.visibility = 'hidden';
      var blur = document.getElementById('blur');
      Customprompt.style.visibility = 'hidden';
      titleInput.style.visibility = 'hidden';
      blur.style.visibility = 'hidden';
      window.open('mailto:' + emailAddress3 + '?subject=' + titleInputEmail + '&body=' + promptMessageEmail);
    }
}
function createNote1() {
    btnPrompt.onclick = function() {
      var changeTitle1 = titleInput.value;
      var savedNote1 = Customprompt.value;
      localStorage.setItem('savedNote1', savedNote1);
      localStorage.setItem('changeTitle1', changeTitle1);
      btnPrompt.style.visibility = 'hidden';
      var blur = document.getElementById('blur');
      Customprompt.style.visibility = 'hidden';
      titleInput.style.visibility = 'hidden';
      blur.style.visibility = 'hidden';
      var msg = new SpeechSynthesisUtterance('Your note has beeen saved');
      window.speechSynthesis.speak(msg);
    }
}
function createNote2() {
    btnPrompt.onclick = function() {
      var changeTitle2 = titleInput.value;
      var savedNote2 = Customprompt.value;
      localStorage.setItem('savedNote2', savedNote2);
      localStorage.setItem('changeTitle2', changeTitle2);
      btnPrompt.style.visibility = 'hidden';
      var blur = document.getElementById('blur');
      Customprompt.style.visibility = 'hidden';
      titleInput.style.visibility = 'hidden';
      blur.style.visibility = 'hidden';
      var msg = new SpeechSynthesisUtterance('Your note has beeen saved');
      window.speechSynthesis.speak(msg);
    }
}
function createNote3() {
    btnPrompt.onclick = function() {
      var changeTitle3 = titleInput.value;
      var savedNote3 = Customprompt.value;
      localStorage.setItem('savedNote3', savedNote3);
      localStorage.setItem('changeTitle3', changeTitle3);
      btnPrompt.style.visibility = 'hidden';
      var blur = document.getElementById('blur');
      Customprompt.style.visibility = 'hidden';
      titleInput.style.visibility = 'hidden';
      blur.style.visibility = 'hidden';
      var msg = new SpeechSynthesisUtterance('Your note has beeen saved');
      window.speechSynthesis.speak(msg);
      answer = 'Your note has been saved';
    }
}


/* removing the header *//////////////////////////////////////
var header = document.getElementById('allHeader');
var all = document.getElementById('all');
var dialog = document.getElementById('dialog');
header.onclick = function() {
  header.style.visibility = "hidden";
  all.style.top = "-140px";
  dialog.style.height = "300px";
  input.select();
}
dialog.ondblclick = function() {
  header.style.visibility = "visible";
  all.style.top = "0px";
  dialog.style.height = "400px";
  input.select();
}
//selecting the input onload
document.body.onload = function() {
  input.select();
  var d = new Date();
  var onLoadTime = d.getMinutes() + "" + d.getSeconds();
  localStorage.setItem('onLoadTime', onLoadTime);
}
input.onclick = function() {
  var onLoadTime = localStorage.getItem('onLoadTime');
  var d = new Date();
  var nowTime = d.getMinutes() + "" + d.getSeconds();
  /*
  if the user clicks on the first 0-80 seconds then input will be empty
  else if user clicks it after that nothing will happen by default
  */
  if ((nowTime - onLoadTime) < 80) {
    input.value = '';
  }
}