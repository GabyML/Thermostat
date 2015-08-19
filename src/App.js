var thermostat = new Thermostat();

var temperatureElement = document.getElementsByTagName('span')[0];
ShowTemperature = function() {
temperatureElement.innerHTML = thermostat.degrees;
};
TemperatureColor = function() {
temperatureElement.style.color = thermostat.colorControl();
};
ShowTemperature();
TemperatureColor();

var upButton = document.getElementsByTagName('button')[0];
upButton.onclick = function(){
	thermostat.increase();
    ShowTemperature();
	TemperatureColor();
};

var decreaseElement = document.getElementsByTagName('button')[1];
decreaseElement.onclick = function(){
	thermostat.decrease();
    ShowTemperature();
	TemperatureColor();
};

var powerSavingElement = document.getElementsByTagName('input')[0];
powerSavingElement.onclick = function(){
	thermostat.SwitchPowerSavingMode();
	thermostat.maximum();
	thermostat.checkMaximum();
    ShowTemperature();
	TemperatureColor();
};

var resetElement = document.getElementsByTagName('button')[2];
resetElement.onclick = function(){
	thermostat.resetButton();
    ShowTemperature();
	TemperatureColor();	
};

