//localstorage list ////////////////////////////////////////////////////////////////////////////
					//emails and email names
					var emailName1 = localStorage.getItem("emailName1");
					var emailAddress1 = localStorage.getItem("emailAddress1");
					var emailName2 = localStorage.getItem("emailName2");
					var emailAddress2 = localStorage.getItem("emailAddress2");
					var emailName3 = localStorage.getItem("emailName3");
					var emailAddress3 = localStorage.getItem("emailAddress3");
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
 					var ansHolder = localStorage.getItem('ansHolder');
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

					var input = document.getElementById('inputText');
					//masterList.close();
					var masterList = new Awesomplete(input);
					masterList.list = [
					    "send email to ",
						"change news site to ", 
						"tell me the news ",
						"clear memory ",
						"show all notes ",
						"show all emails ",
						"delete emails ",
						"delete notes "
					];