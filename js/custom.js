var inputField = document.getElementById('robot-text');
var button = document.getElementById('talk-button');

function makeRobotTalk () {

	var robotText = inputField.value;

	if(robotText){
		responsiveVoice.speak(robotText);
		inputField.value = "";
	}
	else{
		responsiveVoice.speak("Please enter a text in the input field and press talk");
			
	}			
}

button.addEventListener("click", makeRobotTalk);



