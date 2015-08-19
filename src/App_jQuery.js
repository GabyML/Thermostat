thermostat = new Thermostat();

var temperature = $('span')[0];
ShowTemperature = function() {
  temperature.innerHTML = thermostat.degrees;
};
TemperatureColor = function() {
temperature.style.color = thermostat.colorControl();
};

$( document ).ready(function(){
  $('.temperature').show(function(){
  	ShowTemperature();
  	TemperatureColor();
  })

   $('button').eq(0).click(function(){
	thermostat.increase();
    ShowTemperature();
	TemperatureColor();
   });

   $('button').eq(1).click(function(){
   	thermostat.decrease();
   	ShowTemperature();
	TemperatureColor();
   });

   $('button').eq(2).click(function(){
   	thermostat.resetButton();
   	ShowTemperature();
	TemperatureColor();
   });

   $('input').eq(0).change(function() {
    thermostat.SwitchPowerSavingMode();
	thermostat.maximum();
	thermostat.checkMaximum();
    ShowTemperature();
	TemperatureColor();
   });
});