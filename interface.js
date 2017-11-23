
$(document).ready(function () {
  var thermostat = new Thermostat()
  function updateTemp () {
    $('#temperature').text(thermostat.temperature);
    if(thermostat.checkUsage() === 0){
      $('#temperature').css('color', 'green')
    } if (thermostat.checkUsage() === 1) {
      $('#temperature').css('color', 'yellow')
    } if(thermostat.checkUsage() === 2){
      $('#temperature').css('color', 'red')
    }
  }
  updateTemp();
  switchColor();
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
  $('#powersaving-switch').on('click', function() {
     // $(".switch").toggle()
    // $('#powersaving-switch').css('color', 'orange')
    // console.log('helllo');
    switchMode();
  })

  function switchColor() {
    if (thermostat.powerSave == true) {
      $('#powersaving-switch').css('background-color', 'green');
    } else {
      $('#powersaving-switch').css('background-color', 'orange');
    }
  }

  function switchMode() {
    thermostat.switch();
    updateTemp();
    switchColor();
  }
})
