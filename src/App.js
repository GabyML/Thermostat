var thermostat = new Thermostat();

var temperatureElement = document.getElementById('temperature');
temperatureElement.innerHTML = thermostat.degrees;
temperature.style.color = thermostat.colorControl();

var upButton = document.getElementsByTagName('button')[0];
upButton.onclick = function(){
	thermostat.increase();
	temperatureElement.innerHTML = thermostat.degrees;
	temperature.style.color = thermostat.colorControl();
};

var decreaseElement = document.getElementsByTagName('button')[1];
decreaseElement.onclick = function(){
	thermostat.decrease();
	temperatureElement.innerHTML = thermostat.degrees;
	temperature.style.color = thermostat.colorControl();
};

var powerSavingElement = document.getElementsByTagName('button')[2];
powerSavingElement.onclick = function(){
	thermostat.SwitchPowerSavingMode();
	thermostat.maximum();
	thermostat.checkMaximum();
	temperatureElement.innerHTML = thermostat.degrees;
	powerSavingStatus.innerHTML = thermostat.psmStatus;
	temperature.style.color = thermostat.colorControl();
};

var resetElement = document.getElementsByTagName('button')[3];
resetElement.onclick = function(){
	thermostat.resetButton();
	temperatureElement.innerHTML = thermostat.degrees;
	temperature.style.color = thermostat.colorControl();	
};

var powerSavingStatus = document.getElementById('psm_status');
powerSavingStatus.innerHTML = thermostat.psmStatus;
