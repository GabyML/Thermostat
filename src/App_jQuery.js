$( document ).ready(function(){

	thermostat = new Thermostat();

	var temperature = $('span')[0];
	ShowTemperature = function() {
		temperature.innerHTML = thermostat.degrees;
	};
	TemperatureColor = function() {
		temperature.style.color = thermostat.colorControl();
	};

	$(".see_weather").click(function(event){
		getWeather();
	}); // links html file with processed info

	function getWeather(){
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric", function(info) {
			showWeather(info);
		})
	}; // gets info from server

	function showWeather(weather_info){
		$(".weather").text(weather_info.weather[0].description);
		$(".weather_temp").text(Math.round(weather_info.main.temp) + "°C");
		var weather_image_src = "http://openweathermap.org/img/w/" + weather_info.weather[0].icon + ".png";
		$(".weather_image").html("<img src=" + weather_image_src + ">");
	};// process the info gotten from server to send it to the browser

  	ShowTemperature();
  	TemperatureColor();

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