var thermostat = new Thermostat();

var temperatureElement = document.getElementById('temperature');
temperatureElement.innerHTML = thermostat.degrees;
temperature.style.color = thermostat.colorControl();

var increaseElement = document.getElementById('increase_button');
increaseElement.onclick = function(){
	thermostat.increase();
	temperatureElement.innerHTML = thermostat.degrees;
	temperature.style.color = thermostat.colorControl();
};

var decreaseElement = document.getElementById('decrease_button');
decreaseElement.onclick = function(){
	thermostat.decrease();
	temperatureElement.innerHTML = thermostat.degrees;
	temperature.style.color = thermostat.colorControl();
};

var powerSavingElement = document.getElementById('switch_psm');
powerSavingElement.onclick = function(){
	thermostat.SwitchPowerSavingMode();
	thermostat.maximum();
	thermostat.checkMaximum();
	temperatureElement.innerHTML = thermostat.degrees;
	powerSavingStatus.innerHTML = thermostat.psmStatus;
	temperature.style.color = thermostat.colorControl();
};

var resetElement = document.getElementById('reset');
resetElement.onclick = function(){
	thermostat.resetButton();
	temperatureElement.innerHTML = thermostat.degrees;
	temperature.style.color = thermostat.colorControl();	
};

var powerSavingStatus = document.getElementById('psm_status');
powerSavingStatus.innerHTML = thermostat.psmStatus;
