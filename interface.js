$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
  $('#temperature-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  })
  $('#temperature-down').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  })
  $('#temperature-reset').on('click', function() {
    thermostat.resets();
    $('#temperature').text(thermostat.temperature);
  })
  $('#powersaving-switch-on').on('click', function() {
    thermostat.switch();
    $('#power-saving-status').text('on');
  })
  $('#powersaving-switch-off').on('click', function() {
    thermostat.switch();
    $('#power-saving-status').text('off');
  })
})
