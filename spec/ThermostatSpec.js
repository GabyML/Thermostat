describe('Thermostat', function(){

	var t;

	beforeEach(function() {
		t = new Thermostat();
	});
	
	describe('Starting State', function(){

		it('has a starting default temperature of 20 degrees', function(){
			expect(t.degrees).toEqual(20);
		});

		it('starts with Power Saving Mode On', function(){
			expect(t.PowerSavingMode).toBe(true);
		});

		it('can turn off the Power Saving Mode', function(){
			expect(t.OffPowerSavingMode()).toBe(false)
		});

		it('can turn on the Power Saving Mode', function(){
			expect(t.OnPowerSavingMode()).toBe(true)
		});
	});
});