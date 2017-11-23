
$(document).ready(function () {
  var thermostat = new Thermostat()

  function updateTemp () {
    $('#temperature').text(thermostat.temperature)
  }
  // updateTemp();
  $('#temperature-up').on('click', function () {
    thermostat.up()
    updateTemp()
  })
  $('#temperature-down').on('click', function () {
    thermostat.down()
    updateTemp()
  })
  $('#temperature-reset').on('click', function () {
    thermostat.resets()
    updateTemp()
  })
  $('#powersaving-switch-on').on('click', function () {
    thermostat.switch();
    $('#power-saving-status').text('on')
  })
  $('#powersaving-switch-off').on('click', function () {
    thermostat.switch()
    $('#power-saving-status').text('off')
  })
})
