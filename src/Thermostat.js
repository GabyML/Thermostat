function Thermostat() {
	this.degrees = 20;
	this.PowerSavingMode = true;
};

Thermostat.prototype.OffPowerSavingMode = function() {
	if (this.PowerSavingMode == true){
		this.PowerSavingMode = false
	}
	return this.PowerSavingMode
};

Thermostat.prototype.OnPowerSavingMode = function() {
	if (this.PowerSavingMode == false){
		this.PowerSavingMode = true
	}
	return this.PowerSavingMode
};

