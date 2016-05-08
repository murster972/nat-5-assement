window.monthIndexes = {"January": "1", "February": "2", "March": "3", "April": "4", "May": "5", "June": "6", "July": "7", "August": "8", "September": "9", "October": "10", "November": "11", "December": "12"};
window.selectedMonths = [];
window.locationTemps = {"Glasgow": [null, null, null, null, null, null, null, null, null, null, null, null], "Edinburgh": [null, null, null, null, null, null, null, null, null, null, null, null], "Aberdeen": [null, null, null, null, null, null, null, null, null, null, null, null], "Dundee": [null, null, null, null, null, null, null, null, null, null, null, null], "Perth": [null, null, null, null, null, null, null, null, null, null, null, null]};

function GetMonths(ret){
	selectedMonths = [];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	for(var i = 0; i < 12; i ++){
		var month = i + 1;
		var checkBut = document.getElementById("month" + month).checked;
	
		if(checkBut == true){
			selectedMonths.push(months[i]);
		}

		else{
			//pass
		}
	}

	if(selectedMonths.length < 1){
		alert("Please select your desired months.");
	}
	
	else{
		if(ret != true){
			//done
		}

		else{
			HideShowTempInput('block');
		}
	}	
}

function GetAvrgTemps(){
	var location = document.getElementById("locationSelect").value;

	for(var i = 0; i < selectedMonths.length; i ++){
		var monthNum = monthIndexes[selectedMonths[i]];
		var tempValue = document.getElementById("MonthsEnter" + monthNum).value;
		
		if(isNaN(tempValue) != false){
			alert("Please only enter numeric tempratures.");
			break;
		}

		else{
			locationTemps[location][monthNum - 1] = tempValue;
		}
	}
	HideShowTempInput("none");
}

function HideShowTempInput(display){
	document.getElementById("tempEnterTransLayer").style.display = display;
	document.getElementById("enterTempContainerMain").style.display = display;
	document.getElementById("tempEnterClose").style.display = display;

	for(var i = 0; i < selectedMonths.length; i ++){
		var monthNum = monthIndexes[selectedMonths[i]];
		var monthNumber = monthNum;
		document.getElementById("MonthsInputTxt" + monthNumber).style.display = display;
		document.getElementById("MonthsEnter" + monthNumber).style.display = display;
	}
}

function ShowAvrgTemp(){
	GetMonths(false);
	var location = document.getElementById("locationSelect").value;
	var totalTemp = 0;
	var totalNums = 0;
	
	for(var i = 0; i < selectedMonths.length; i ++){
		totalTemp += Number(locationTemps[location][monthIndexes[selectedMonths[i]] - 1]);
		totalNums += 1;
	}

	var avergTemp = totalTemp / totalNums;
	document.getElementById("avrgTempDisplay").innerHTML = avergTemp;
}