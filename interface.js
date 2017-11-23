
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
  $("#powersaving-switch").on(function(){
    $(".switch").toggle();
    $(this).val( $(this).val() == 'On' ? 'Off' : 'On')
  })
})
