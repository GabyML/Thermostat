$( document ).ready(function(){

	thermostat = new Thermostat();

	var temperature = $('span')[0];
	ShowTemperature = function() {
		$('.temperature').html(thermostat.degrees);
	};
	TemperatureColor = function() {
		temperature.style.color = thermostat.colorControl();
	};

	$(".see_weather").click(function(event){
		getWeather();
	}); // links html file with processed info

	function getWeather(){
		var userCity= $("#city").val();
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ userCity +"&units=metric", function(info) {
			$(".cityname").html("City:" + info.name);
			$(".weather").html("Weather:" + info.weather[0].main);
			$(".weather_temp").html("Temperature(°C):"+ info.main.temp);
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

   $("button[data-temp-control='up']").click(function(){
	thermostat.increase();
    ShowTemperature();
	TemperatureColor();
   });

   $("button[data-temp-control='down']").click(function(){
   	thermostat.decrease();
   	ShowTemperature();
	TemperatureColor();
   });

   $("button[data-temp-reset='reset']").click(function(){
   	thermostat.resetButton();
   	ShowTemperature();
	TemperatureColor();
   });

   $("input:checkbox").change(function() {
    thermostat.SwitchPowerSavingMode();
	thermostat.maximum();
	thermostat.checkMaximum();
    ShowTemperature();
	TemperatureColor();
   });
});