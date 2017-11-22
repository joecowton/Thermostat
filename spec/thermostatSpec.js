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
    thermostat.temperature = 32;
    thermostat.switch();
    expect(function() {thermostat.up();
    }).toThrow('Max temperature is exceeded');
  });
});
