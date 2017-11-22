describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start at 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it ('should increase the temperature', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it ('should decrease the temperature', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it ('should not go below 10 degrees', function() {
    for (var i = 1; i <= 10; i++) {thermostat.down();
    }
    expect(function() { thermostat.down();
    }).toThrow("Temperature can't go below 10");
  });
  it ('should switch to max 25 degrees in power saving mode', function() {
    thermostat.temperature = 25;
    expect(function() {thermostat.up();
    }).toThrow('Max temperature is exceeded');
  });

  it ('should switch to max 32 degrees in power saving mode', function() {
    thermostat.temperature = 32;
    thermostat.switch();
    expect(function() {thermostat.up();
    }).toThrow('Max temperature is exceeded');
  });

  it ('should reset the temperature to 20', function() {
    thermostat.temperature = 24;
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('return low-usage, when below 18', function() {
    thermostat.temperature = 17;
    expect(thermostat.checkUsage()).toEqual('low-usage');
  });
  it('return medium-usage, when between 18 and 25', function() {
    thermostat.temperature = 20;
    expect(thermostat.checkUsage()).toEqual('medium-usage');
  });
  it('return low-usage, when above 25', function() {
    thermostat.switch();
    thermostat.temperature = 30;
    expect(thermostat.checkUsage()).toEqual('high-usage');
  });
});
