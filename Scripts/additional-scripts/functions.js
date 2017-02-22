/* this is for emails *//////////////////////////////////////
var emailPrompt = document.getElementById('prompt1');
var emailInput = document.getElementById('titleInput');
function emailDisplay() {
    var msg1 = new SpeechSynthesisUtterance('Fill in the following inputs');
    window.speechSynthesis.speak(msg1);
    emailPrompt.style.zIndex = '20';
    var blur = document.getElementById('blur');
    var btnPrompt = document.getElementById('btnPrompt');
    btnPrompt.value = 'Submit';
    btnPrompt.style.visibility = 'visible';
    emailPrompt.style.visibility = 'visible';
    emailInput.style.visibility = 'visible';
    blur.style.visibility = 'visible';
}
function submitEmailButton1() {
    btnPrompt.onclick = function () {
      var titleInputEmail = document.getElementById('titleInput').value;
      var promptMessageEmail = document.getElementById('prompt1').value;
      btnPrompt.style.visibility = 'hidden';
      var blur = document.getElementById('blur');
      emailPrompt.style.visibility = 'hidden';
      emailInput.style.visibility = 'hidden';
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
      emailPrompt.style.visibility = 'hidden';
      emailInput.style.visibility = 'hidden';
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
      emailPrompt.style.visibility = 'hidden';
      emailInput.style.visibility = 'hidden';
      blur.style.visibility = 'hidden';
      window.open('mailto:' + emailAddress3 + '?subject=' + titleInputEmail + '&body=' + promptMessageEmail);
    }
}


/* removing the header *//////////////////////////////////////
var header = document.getElementById('allHeader');
var all = document.getElementById('all');
var dialog = document.getElementById('dialog');
header.onclick = function() {
  header.style.visibility = "hidden";
  all.style.top = "-100px";
  dialog.style.height = "300px";
}
dialog.ondblclick = function() {
  header.style.visibility = "visible";
  all.style.top = "0px";
  dialog.style.height = "400px";
}
//selecting the input onload
document.body.onload = function() {
  input.select();
}
