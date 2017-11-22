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
});
