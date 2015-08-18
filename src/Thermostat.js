function Thermostat() {
	this.degrees = 20;
	this.degreesStarting = 20;
	this.PowerSavingMode = true;
	this.MaxTemperature = 25;
	this.colorCode = 'yellow';
	this.MinTemperature = 10;
	this.MaxPSMOn = 25;
	this.MaxPSMOff = 32;
	this.resetTemperature = 20;
	this.greenLimit = 18;
	this.redLimit = 24;
};

Thermostat.prototype.OffPowerSavingMode = function() {
		this.PowerSavingMode = false;
	};

Thermostat.prototype.OnPowerSavingMode = function() {
		if (this.degrees > this.MaxPSMOn){
			this.degrees = this.MaxPSMOn;
		}
		this.PowerSavingMode = true;
};

Thermostat.prototype.increase = function() {
	if (this.degrees >= this.MaxTemperature){
		this.degrees = this.MaxTemperature;
	} else {
	this.degrees += 1;
	}
};

Thermostat.prototype.decrease = function() {
	if (this.degrees <= this.MinTemperature){
		this.degrees = this.MinTemperature;
	} else {
	this.degrees -= 1;
	}
};

Thermostat.prototype.maximum = function() {
	if (this.PowerSavingMode === true){
		this.MaxTemperature = this.MaxPSMOn
	} else {
		this.MaxTemperature = this.MaxPSMOff
	}
};

Thermostat.prototype.resetButton = function() {
	this.degrees = this.resetTemperature;
};

Thermostat.prototype.colorControl = function() {
	if (this.degrees < this.greenLimit){
		this.colorCode = 'green';
	}
	else if (this.degrees > this.redLimit){
		this.colorCode = 'red';
	} else {
		this.colorCode = 'yellow';
	}
};

